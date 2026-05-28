---
title: MongoDB Snippets
description: ""
created: 2026-05-28
tags:
  - mongodb
  - snippets/mongodb
---

[mongodb-labs/mongosh-snippets: An experimental plugin feature for mongosh](https://github.com/mongodb-labs/mongosh-snippets/)

## `mongosh`

```sh
mongosh --host host --port port -u database

# show databases
> show dbs
# use a database
> use <db_name>

# show collections
> show collections

# operations
> db.<collection>.<operation>(<options>)
# query
> db.foo.find({name: 'bar'})
# show schema
> db.foo.findOne()

# drop database
> use db1
switched to db db1
> db.dropDatabase()
{ "dropped" : "db1", "ok" : 1 }
> show dbs
local   0.078125GB
sessions        0.203125GB
```

Using `mongosh` in shell script:

```sh
mongosh "$rootAuthDatabase" <<-EOSH
                db.createUser({
                    user: $(_js_escape "$MONGO_INITDB_ROOT_USERNAME"),
                    pwd: $(_js_escape "$MONGO_INITDB_ROOT_PASSWORD"),
                    roles: [ { role: 'root', db: $(_js_escape "$rootAuthDatabase") } ]
                })
            EOSH
```

## Indexes

```js
// show indexes
mongo > db.collection.getIndexes();

// create index
mongo >
  db.collection.createIndex(
    { key: 1 },
    {
      unique: true,
      sparse: true,
      expireAfterSeconds: 3600,
    },
  );

//  can use `db.collection.createIndexes()` if they share the same options
```

## Reshaping Object

```js
const reshapingOptions = {
  // include .id (it's a virtual)
  virtuals: true,

  // exclude .__v
  versionKey: false,

  // exclude ._id
  transform: function (doc, ret) {
    delete ret._id;
    return ret;
  },
};

const friendSchema = mongoose.Schema(
  {
    givenName: String,
    familyName: String,
  },
  { toJSON: reshapingOptions },
);

const friendModel = mongoose.model("Friend", friendSchema);

const john = friendModel.findOne({ givenName: "John" });
if (!john) {
  res.status(404).json({ error: "No John Found" });
}
```

## Aggregation

> TODO

## #perfmatters

```js
mongo> function quick_explain(explainPlan) {
  var stepNo = 1;
  var printInputStage = function(step) {
    if ("inputStage" in step) {
      printInputStage(step.inputStage);
    }
    if ("inputStages" in step) {
      step.inputStages.forEach(function(inputStage){
        printInputStage(inputStage);
      });
    }
    if ("indexName" in step) {
      print(stepNo++, step.stage, step.indexName);
    } else {
      print(stepNo++, step.stage);
    }
  };
  printInputStage(explainPlan);
}
mongo> var explainDoc=db.collection.explain().<query>
mongo> var explainJson = explainDoc.next();
mongo> quick_explain(explainJson.queryPlanner.winningPlan);
1      IXSCAN Phone_1
2     FETCH
3    SORT_KEY_GENERATOR
4   SORT
5  PROJECTION
mongo> quick_explain(explainJson.queryPlanner.rejectedPlans[1])
```

```js
mongo> function executionStats(execStats) {
  var stepNo = 1;
  print('\n');
  var printSpaces = function(n) {
    var s = '';
    for (var i = 1; i < n; i++) {
      s += ' ';
    }
    return s;
  };
  var printInputStage = function(step, depth) {
    if ('inputStage' in step) {
      printInputStage(step.inputStage, depth + 1);
    }
    if ('inputStages' in step) {
      step.inputStages.forEach(function(inputStage) {
        printInputStage(inputStage, depth + 1);
      });
    }
    var extraData = '(';
    if ('indexName' in step) extraData += ' ' + step.indexName;
    if ('executionTimeMillisEstimate' in step) {
      extraData += ' ms:' + step.executionTimeMillisEstimate;
    }
    if ('keysExamined' in step)
       extraData += ' keys:' + step.keysExamined;
    if ('docsExamined' in step)
       extraData += ' docs:' + step.docsExamined;
    extraData += ')';
    print(stepNo++, printSpaces(depth), step.stage, extraData);
  };
  printInputStage(execStats.executionStages, 1);
  print(
    '\nTotals:  ms:',
    execStats.executionTimeMillis,
    ' keys:',
    execStats.totalKeysExamined,
    ' Docs:',
    execStats.totalDocsExamined
  );
}
mongo> var explainDoc = db.collection.explain("executionStats").<query>
mongo> var explainJson = explainDoc.next();
mongo> executionStats(explainJson.executionStats);
```
