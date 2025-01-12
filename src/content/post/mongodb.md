---
title: MongoDB
description: ""
created: 2014-12-17
updated: 2025-01-09
tags:
  - app
  - mongodb
---

> MongoDB after 3.6 uses [SSPL](https://www.mongodb.com/licensing/server-side-public-license)

[[ferretdb]]

[MongoDB | Build Faster. Build Smarter. | MongoDB](https://www.mongodb.com/)

[MongoDB Evolved – Version History | MongoDB](https://www.mongodb.com/evolved)
[MongoDB Evolved – Version History | MongoDB](https://www.mongodb.com/evolved)
[MongoDB 4.2 vs 4.0, 3.6, 3.4, and 3.2 Benchmarks - hartator - Medium](https://medium.com/@hartator/mongodb-4-2-vs-4-0-3-6-3-4-and-3-2-benchmarks-ee96a09ef231)
3.4 is faster

[Online Courses | MongoDB University](https://university.mongodb.com/courses/catalog)
[About M001](https://university.mongodb.com/courses/M001/about)

[Reference — MongoDB Manual](https://www.mongodb.com/docs/manual/reference/)
[What is MongoDB? — MongoDB Manual](https://www.mongodb.com/docs/manual/)
[MongoDB - Back to Basics - YouTube](https://www.youtube.com/playlist?list=PLyROlY1vFlbdA45cHtcId5NLxPDHJ_lpb)
[MongoDB 6.0 Brings Encrypted Queries, Time-Series Data Collection – The New Stack](https://thenewstack.io/mongodb-6-0-brings-encrypted-queries-time-series-data-collection/)

[MongoDB Tutorials | Studio 3T](https://studio3t.com/knowledge-base/categories/mongodb-tutorials/)
[MongoDB Tutorial for Beginners - YouTube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u)
[Manipulating Data With MongoDB. Learn the basics of CRUD with PyMongo | by Benedict Soh | Towards Data Science](https://towardsdatascience.com/manipulating-data-with-mongodb-bd561f09d76a)

[How To Manage Data with MongoDB | DigitalOcean](https://www.digitalocean.com/community/tutorial_series/how-to-manage-data-with-mongodb)
[MongoDB: A Beginner’s Guide – Bret Cameron – Medium](https://medium.com/@bretcameron/mongodb-a-beginners-guide-8fca0c7787a4)
[Stock Price Notifications with Mongoose and MongoDB Change Streams | www.thecodebarbarian.com](http://thecodebarbarian.com/stock-price-notifications-with-mongoose-and-mongodb-change-streams.html)
[mongodb - Difference between findOneAndDelete() and findOneAndRemove() - Stack Overflow](https://stackoverflow.com/questions/50602037/difference-between-findoneanddelete-and-findoneandremove) prefer `findOneAndDelete()`

[karlseguin/the-little-mongodb-book: The Little MongoDB Book](https://github.com/karlseguin/the-little-mongodb-book) 2.6

[Simple Steps to Optimize Your App Performance with MongoDB, Redis, and Node.js - By](https://hackernoon.com/simple-steps-to-optimize-your-app-performance-5700d8b58f58)
[Performance Best Practices: Hardware and OS Configuration | MongoDB](https://www.mongodb.com/blog/post/performance-best-practices-hardware-and-os-configuration)

## Percona Server for MongoDB

[MongoDB Runs Better with Percona](https://www.percona.com/solutions/mongodb-runs-better-with-percona)
[Percona Server for MongoDB](https://www.percona.com/software/mongodb/percona-server-for-mongodb)

## `mongod` server

[mongod — MongoDB Manual](https://docs.mongodb.com/manual/reference/program/mongod/)
[Authentication — MongoDB Manual](https://docs.mongodb.com/manual/core/authentication/)
[Role-Based Access Control — MongoDB Manual](https://docs.mongodb.com/manual/core/authorization/)

[Booting a mongoDB container with user specified credentials | Lakshmi Narasimhan](https://www.lakshminp.com/docker-mongodb)

[docker-library/mongo: Docker Official Image packaging for MongoDB](https://github.com/docker-library/mongo)
[docs/README.md at master · docker-library/docs](https://github.com/docker-library/docs/blob/master/mongo/README.md)

`docker-entrypoint-initdb.d`, `mongo` client script
[docs/mongo at master · docker-library/docs · GitHub](https://github.com/docker-library/docs/tree/master/mongo#initializing-a-fresh-instance)
[Initializing mongo db in docker-compose with init script · GitHub](https://gist.github.com/gbzarelli/c15b607d62fc98ae436564bf8129ea8e)

## `mongo` client (`mongosh`)

[mongo — MongoDB Manual](https://docs.mongodb.com/manual/reference/program/mongo/)
[mongo Shell Quick Reference — MongoDB Manual](https://docs.mongodb.com/manual/reference/mongo-shell/)
[mongo Shell Methods — MongoDB Manual](https://docs.mongodb.com/manual/reference/method/)

[MongoDB CRUD Operations — MongoDB Manual](https://docs.mongodb.com/manual/crud/)
[Operators — MongoDB Manual](https://docs.mongodb.com/manual/reference/operator/)

```
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

## drop database
> use db1
switched to db db1
> db.dropDatabase()
{ "dropped" : "db1", "ok" : 1 }
> show dbs
local   0.078125GB
sessions        0.203125GB
```

Using `mongo` in shell script:

```sh
mongo "$rootAuthDatabase" <<-EOJS
                db.createUser({
                    user: $(_js_escape "$MONGO_INITDB_ROOT_USERNAME"),
                    pwd: $(_js_escape "$MONGO_INITDB_ROOT_PASSWORD"),
                    roles: [ { role: 'root', db: $(_js_escape "$rootAuthDatabase") } ]
                })
            EOJS
```

### `mongodump`/`mongorestore`

[mongodump — MongoDB Database Tools](https://docs.mongodb.com/database-tools/mongodump/)
[mongorestore — MongoDB Database Tools](https://docs.mongodb.com/database-tools/mongorestore/)

```sh
mongodump --archive="mongodump-test-db" --db=test
# with database name change
mongorestore --archive="mongodump-test-db" --nsFrom='test.*' --nsTo='examples.*'
```

### `mongoexport`/`mongoimport`

[mongoexport — MongoDB Database Tools](https://docs.mongodb.com/database-tools/mongoexport/)
[mongoimport — MongoDB Database Tools](https://docs.mongodb.com/database-tools/mongoimport/)

```sh
mongoexport --db test --collection traffic --out traffic.json
mongoexport --db users --collection contacts --type=csv --fields name,address --out /opt/backups/contacts.csv
# fieldFile can be used for CSV
```

```sh
mongoimport --db test --collection traffic traffic.json
# the CSV has header line
mongoexport --db users --collection contacts --type=csv --headerline contacts.csv
```

## Admin UI

[mongo-express - Docker Hub](https://hub.docker.com/_/mongo-express)
[mongo-express/mongo-express: Web-based MongoDB admin interface, written with Node.js and express](https://github.com/mongo-express/mongo-express)
[Too fast, too insecure: Securing Mongo Express web administrative interfaces - Help Net Security](https://www.helpnetsecurity.com/2019/04/26/securing-mongo-express-web-administrative-interfaces/)

## On the contrary

[Why You Should Never Use MongoDB « Sarah Mei](http://www.sarahmei.com/blog/2013/11/11/why-you-should-never-use-mongodb/)
[Why you should never, ever, ever use MongoDB - joepie91's Ramblings](http://cryto.net/~joepie91/blog/2015/07/19/why-you-should-never-ever-ever-use-mongodb/)
[MongoDB queries don’t always return all matching documents! — Meteor Engineering](https://engineering.meteor.com/mongodb-queries-dont-always-return-all-matching-documents-654b6594a827#.9h3o08c1d)

## #perfmatters

[Comparing MongoDB performance on public clouds: AWS, Azure & DigitalOcean](https://scalegrid.io/blog/comparing-mongodb-performance-on-public-clouds-aws-azure-digital-ocean/)

[Analyze Query Performance — MongoDB Manual](https://docs.mongodb.com/manual/tutorial/analyze-query-plan/)
[Query Plans — MongoDB Manual](https://docs.mongodb.com/manual/core/query-plans/)

[Partitions — MongoDB Realm](https://docs.mongodb.com/realm/sync/partitions/)
[Partition Strategies — MongoDB Realm](https://docs.mongodb.com/realm/sync/partition-strategies/#std-label-partition-strategies)

## Internals

[MongoDB internal Architecture. I’m a big believer that database… | by Hussein Nasser | Medium](https://medium.com/@hnasr/mongodb-internal-architecture-9a32f1403d6f)
[MongoDB Internal Architecture - YouTube](https://www.youtube.com/watch?v=ONzdr4SmOng) ❗!important

[2x Faster Reads and Writes with this MongoDB feature | Clustered Collections - YouTube](https://www.youtube.com/watch?v=OhJ3xcjtpis)
[Clustered Collections — MongoDB Manual](https://www.mongodb.com/docs/manual/core/clustered-collections/)

Previously, a find by `_id` is two index search, one in `_id` index for the `recordId`, one in the internal `recordId` index for the actual BSON document
Clustered Collections in 5.3 merged the two index and `_id` index's leaves are the BSON documents

## Indexes

[MongoDB Performance 101: How To Improve the Speed of MongoDB App](https://medium.com/better-programming/mongodb-performance-101-how-to-improve-the-speed-of-mongodb-app-a59f2390ee5)
[Indexing Strategies — MongoDB Manual](https://docs.mongodb.com/manual/applications/indexes/)
[How To Use Indexes in MongoDB | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-indexes-in-mongodb)

[Indexes — MongoDB Manual](https://docs.mongodb.com/manual/indexes/)
[Compound Indexes — MongoDB Manual](https://docs.mongodb.com/manual/core/index-compound/)
[Multikey Indexes — MongoDB Manual](https://docs.mongodb.com/manual/core/index-multikey/) for arrays in documents
[Hashed Indexes — MongoDB Manual](https://docs.mongodb.com/manual/core/index-hashed/) when index field > 1024 bytes
[db.collection.createIndex() — MongoDB Manual](https://docs.mongodb.com/manual/reference/method/db.collection.createIndex/)

[\[SERVER-3294\] Ability to keep data on disk in ~ index order - MongoDB Jira](https://jira.mongodb.org/browse/SERVER-3294) WiredTiger does not implement (and cannot guarantee) index clustering on disk level

### Text Search

Create a text index, the use `collection.find( { $text: { $search: value } } )`

[Perform a Text Search (Legacy) — MongoDB Manual](https://docs.mongodb.com/manual/core/link-text-indexes/)
[How To Perform Full-text Search in MongoDB | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-perform-full-text-search-in-mongodb)

[mongodb - Text search query for text "other" always returns no results? - Stack Overflow](https://stackoverflow.com/questions/35122049/text-search-query-for-text-other-always-returns-no-results) stemmed word match, non-language words must be exact match

stop words are by default skipped, use `{"language": "none"}` when creating index to override this behavior
[mongo/src/mongo/db/fts at v4.4 · mongodb/mongo · GitHub](https://github.com/mongodb/mongo/tree/v4.4/src/mongo/db/fts)

[$regex — MongoDB Manual](https://docs.mongodb.com/manual/reference/operator/query/regex/)
`db.collection.find( { field: { $regex: query, $options: "i" } } )`

### TTL/Auto expiry

Create index on a date field with `expireAfterSeconds` option

```js
db.collection.createIndex({ createdAt: 1 }, { expireAfterSeconds: 60 }); // auto field (Mongoose)
db.collection.createIndex({ expireAt: 1 }, { expireAfterSeconds: 0 }); // manual field
```

Using manual field you can change the expire period without recreating the index.

[TTL Indexes — MongoDB Manual](https://docs.mongodb.com/manual/core/index-ttl/)
[Expire Data from Collections by Setting TTL — MongoDB Manual](https://docs.mongodb.com/manual/tutorial/expire-data/)
[How to Erase Expired Docs Automatically with MongoDB (TTL index) | Hacker Noon](https://hackernoon.com/how-to-erase-expired-docs-automatically-with-mongodb-ttl-index-97283wll)
[MongoDB Auto Expire Documents - DEV Community](https://dev.to/sks147/mongodb-auto-expire-documents-6c9)

## Sessions API

Since 3.6, provides causal consistency, multi-document transactions

[Transactions | MongoDB](https://www.mongodb.com/transactions)
[Transactions — MongoDB Manual](https://docs.mongodb.com/master/core/transactions/)
[Session — MongoDB Manual](https://docs.mongodb.com/manual/reference/method/Session/)

[Mongoose: Transactions](https://mongoosejs.com/docs/transactions.html)

## Schema Validation

[Schema Validation — MongoDB Manual](https://docs.mongodb.com/manual/core/schema-validation/)
[$jsonSchema — MongoDB Manual](https://docs.mongodb.com/manual/reference/operator/query/jsonSchema/#op._S_jsonSchema)

[[serialization#JSON schema]]

Showing validation rules:

```
db.getCollectionInfos({name: "myCollection"})
```

### Mongoose

[Mongoose ODM](https://mongoosejs.com/) client side ORM and validation
[Introduction to Mongoose for MongoDB](https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/)

[Mongoose Schemas](https://mongoosejs.com/docs/guide.html)
[Mongoose: Schema](https://mongoosejs.com/docs/api/schema.html) schema method, pre/post hooks
[Mongoose: Model](https://mongoosejs.com/docs/api/model.html)
[Mongoose: Document](https://mongoosejs.com/docs/api/document.html)

[yoitsro/joigoose: Joi validation for your Mongoose models without the hassle of maintaining two schemas](https://github.com/yoitsro/joigoose) Joi -> Mongoose

```js
const joigoose = require("joigoose")(mongoose);

const mongooseSchema = new mongoose.Schema(joigoose.convert(joiSchema));
mongose.model("Model", mongooseSchema);
```

[Search Results | Snyk](https://snyk.io/advisor/search?source=npm&q=json-schema-to-mongoose) JSON Schema -> Mongoose
[convert-json-schema-to-mongoose - npm package | Snyk](https://snyk.io/advisor/npm-package/convert-json-schema-to-mongoose)
[@simplyhexagonal/json-schema-to-mongoose-schema - npm package | Snyk](https://snyk.io/advisor/npm-package/@simplyhexagonal/json-schema-to-mongoose-schema)

[node.js - MongoDB: output 'id' instead of '\_id' - Stack Overflow](https://stackoverflow.com/questions/7034848/mongodb-output-id-instead-of-id)

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
  { toJSON: reshapingOptions }
);

const friendModel = mongoose.model("Friend", friendSchema);

const john = friendModel.findOne({ givenName: "John" });
if (!john) {
  res.status(404).json({ error: "No John Found" });
}
```

[What is the difference between Mongoose toObject and toJSON? - Stack Overflow](https://stackoverflow.com/questions/31756673/what-is-the-difference-between-mongoose-toobject-and-tojson)
[Documentation: clarify the difference between toObject() and toJSON() · Issue #2072 · Automattic/mongoose](https://github.com/Automattic/mongoose/issues/2072#issuecomment-481378112)
[Mongoose toObject and toJSON transform behavior with sub-documents | Alexander Zeitler](https://alexanderzeitler.com/articles/mongoose-tojson-toobject-transform-with-subdocuments/)
[node.js - MongoDB: output 'id' instead of '\_id' - Stack Overflow](https://stackoverflow.com/a/42763286)

### Python

[mongodb/motor: Motor - the async Python driver for MongoDB and Tornado or asyncio](https://github.com/mongodb/motor)
[art049/odmantic: Async ODM (Object Document Mapper) for MongoDB based on python type hints](https://github.com/art049/odmantic)
[roman-right/beanie: Asynchronous Python ODM for MongoDB](https://github.com/roman-right/beanie)

## Scaling

[Replication — MongoDB Manual](https://docs.mongodb.com/manual/replication/)
[Sharding — MongoDB Manual](https://docs.mongodb.com/manual/sharding/)

[MongoDB is web scale](http://www.mongodb-is-web-scale.com/)
[Indexing, Replicating, and Sharding in MongoDB [Tutorial] | Packt Hub](https://hub.packtpub.com/indexing-replicating-and-sharding-in-mongodb-tutorial/)
[Configuring a MongoDB Replica Set for Analytics - DZone Database](https://dzone.com/articles/configuring-a-mongodb-replica-set-for-analytics)

## Data Modeling

[Data Modeling Introduction — MongoDB Manual](https://docs.mongodb.com/manual/core/data-modeling-introduction/)
[Database References — MongoDB Manual](https://docs.mongodb.com/manual/reference/database-references/)
[Model Data for Atomic Operations — MongoDB Manual](https://docs.mongodb.com/master/tutorial/model-data-for-atomic-operations/)

[Modelling Entity Relations In MongoDB | Alexander Paterson](https://alexanderpaterson.com/posts/modelling-entity-relations-in-mongodb) populating reference with `$match` and `$unwind`
[如何将关系型数据导入 MongoDB？](http://www.infoq.com/cn/articles/migrate-from-rmdb-mongodb)

[Mongoose v5.12.13: Query Population](https://mongoosejs.com/docs/populate.html)
[mongoose: Referencing schema in properties or arrays | Alexander Zeitler](https://alexanderzeitler.com/articles/mongoose-referencing-schema-in-properties-and-arrays/)

[A Node.js Perspective on MongoDB 3.4: Collations | www.thecodebarbarian.com](http://thecodebarbarian.com/a-nodejs-perspective-on-mongodb-34-collations)

[Thinking in Documents: Part 1 | MongoDB](https://www.mongodb.com/blog/post/thinking-documents-part-1)
[Thinking in Documents: Part 2 | MongoDB](https://www.mongodb.com/blog/post/thinking-documents-part-2)
[MongoDB - Thinking in Documents - agile-code.com](https://www.agile-code.com/blog/mongodb-thinking-in-documents/)

[6 Rules of Thumb for MongoDB Schema Design: Part 1 | MongoDB](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-1)
[6 Rules of Thumb for MongoDB Schema Design: Part 2 | MongoDB](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-2)
[6 Rules of Thumb for MongoDB Schema Design: Part 3 | MongoDB](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-3)

## Aggregation (Join)

> MongoDB 5.0 deprecated map-reduce and improved aggregation pipeline

[Aggregation Operations — MongoDB Manual](https://www.mongodb.com/docs/manual/aggregation/)
[Aggregation Pipeline Operators — MongoDB Manual](https://www.mongodb.com/docs/manual/reference/operator/aggregation/)
[Aggregation Reference — MongoDB Manual](https://www.mongodb.com/docs/manual/reference/aggregation/)
[MongoDB Aggregation: tutorial with examples and exercises | Studio 3T](https://studio3t.com/knowledge-base/articles/mongodb-aggregation-framework/)

`$lookup` is used for join, `$unwind` is used for flatten array (expanding to multiple documents so the array elements are top level documents)
[MongoDB Join Two Collections Simplified | Hevo](https://hevodata.com/learn/mongodb-join-two-collections/)
[MongoDB $lookup Example | MongoDB Aggregation Pipeline](https://studio3t.com/knowledge-base/articles/mongodb-lookup-aggregation-stage/)

## Tips and Tricks

[Perform Two Phase Commits — MongoDB Manual](https://docs.mongodb.com/manual/tutorial/perform-two-phase-commits/)

[A Node.js Perspective on MongoDB 4.0: Transactions | www.thecodebarbarian.com](http://thecodebarbarian.com/a-node-js-perspective-on-mongodb-4-transactions.html)

[Backup MongoDB inside of Docker the right way - cupcakearmy](https://blog.nicco.io/2019/08/15/backup-mongodb-inside-of-docker-the-right-way/)

[Using MongoDB as realtime DB with nodeJS. - Noteworthy - The Journal Blog](https://blog.usejournal.com/using-mongodb-as-realtime-db-with-nodejs-c6f52c266750) need replica sets instead of stand along server

[How to traverse MongoDB super-large collections efficiently? | Develop Paper](https://developpaper.com/how-to-traverse-mongodb-super-large-collections-efficiently/)
[Henrique S. Coelho - hcoelho.com - Fixing memory problems with Node.js and Mongo DB](https://hcoelho.com/blog/33/Fixing_memory_problems_with_Node.js_and_Mongo_DB)

[node.js - Mongoose (mongodb) batch insert? - Stack Overflow](https://stackoverflow.com/questions/16726330/mongoose-mongodb-batch-insert/24848148#24848148) no need to use Bulk API, `Model.collection.insertMany()` is fast enough (and without out of heap issue) (`Model.insertMany()` suffers from these issues)
[javascript - Bulk insert in MongoDB using mongoose - Stack Overflow](https://stackoverflow.com/questions/37379180/bulk-insert-in-mongodb-using-mongoose/37379532)
[Bulk Operations in MongoDB - dbKoda - Medium](https://medium.com/dbkoda/bulk-operations-in-mongodb-ed49c109d280)
[Guy Harrison - Yet Another Database Blog - Bulk inserts in MongoDB](http://guyharrison.squarespace.com/blog/2016/11/7/bulk-inserts-in-mongodb.html)

[mongodb - Possibility of duplicate Mongo ObjectId's being generated in two different collections? - Stack Overflow](https://stackoverflow.com/questions/4677237/possibility-of-duplicate-mongo-objectids-being-generated-in-two-different-colle)

[feliixx/mgodatagen: Generate random data for MongoDB](https://github.com/feliixx/mgodatagen)

### Call function

[Using $function in updateMany not working - Working with Data - MongoDB Developer Community Forums](https://www.mongodb.com/community/forums/t/using-function-in-updatemany-not-working/8801/4)

> the function has to be stringified

```js
collection.updateMany(QUERY, [
  {
    $addFields: {
      field: {
        $function: { args: ["$field"], lang: "js", body: "function() {}" },
      },
    },
  },
]);
```

---

## MangoDB

[A truly Open Source MongoDB alternative - getmango](https://www.mangodb.io/) expose PostgreSQL as MongoDB API
