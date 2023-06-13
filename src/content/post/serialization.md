---
title: Serialization
description: ""
created: 2020-03-27
tags:
  - comp.lang
---

> TODO: merge `Dropbox/caravan/caravan/interchange-format`

[Comparing speed and size of to_csv(), np.save(), to_hdf(), to_pickle() | Towards Data Science](https://towardsdatascience.com/comparing-the-speed-and-filesize-of-to-csv-np-save-to-hdf-to-pickle-functions-6c53a6a3fc82)
[The Best Format to Save Pandas Data | by Ilia Zaitsev | Towards Data Science](https://towardsdatascience.com/the-best-format-to-save-pandas-data-414dca023e0d)
[devforfu/pandas-formats-benchmark: A little benchmark comparing Pandas data frames serialization formats](https://github.com/devforfu/pandas-formats-benchmark)

## IDL

[Interface description language - Wikiwand](https://www.wikiwand.com/en/Interface_description_language)

## JSON schema

[JSON Schema | The home of JSON Schema](https://json-schema.org/)
[Understanding JSON Schema — Understanding JSON Schema 7.0 documentation](https://json-schema.org/understanding-json-schema/index.html)
[Structuring a complex schema — Understanding JSON Schema 7.0 documentation](https://json-schema.org/understanding-json-schema/structuring.html) defining types
[Combining schemas — Understanding JSON Schema 7.0 documentation](https://json-schema.org/understanding-json-schema/reference/combining.html#allof)
[Applying subschemas conditionally — Understanding JSON Schema 7.0 documentation](https://json-schema.org/understanding-json-schema/reference/conditionals.html)
[jsonschema - Json Schema file extension - Stack Overflow](https://stackoverflow.com/questions/9391370/json-schema-file-extension) `.json` with mime type `application/schema+json`

[fastify/fluent-json-schema: A fluent API to generate JSON schemas](https://github.com/fastify/fluent-json-schema) ❗!important
[sinclairzx81/typebox: JSON Schema Type Builder with Static Type Resolution for TypeScript](https://github.com/sinclairzx81/typebox) ❗!important, sharing definition between JSON Schema and TypeScript

[JSON Schema Tool](https://jsonschema.net/home) playground, infer schema from JSON
[JSON Schema Lint :: JSON Schema Validator](https://jsonschemalint.com/#!/version/draft-07/markup/json)
[Fake your JSON-Schemas!](https://json-schema-faker.js.org/)

[How to do inheritance? · Issue #348 · json-schema-org/json-schema-spec](https://github.com/json-schema-org/json-schema-spec/issues/348)
[Explain why inheritance isn't the right model · Issue #148 · json-schema-org/json-schema-org.github.io](https://github.com/json-schema-org/json-schema-org.github.io/issues/148)

[jsonSchema attribute conditionally required - Stack Overflow](https://stackoverflow.com/questions/38717933/jsonschema-attribute-conditionally-required)
[jsonschema - JSON schema: conditional dependency - Stack Overflow](https://stackoverflow.com/questions/47674950/json-schema-conditional-dependency)

### Validators

[JSON Schema Validation: A Vocabulary for Structural Validation of JSON](https://json-schema.org/latest/json-schema-validation.html)
[draft-bhutton-json-schema-validation-00 - JSON Schema Validation: A Vocabulary for Structural Validation of JSON](https://tools.ietf.org/html/draft-bhutton-json-schema-validation-00)

[Ajv JSON schema validator](https://ajv.js.org/)
[ajv-validator/ajv: The fastest JSON schema Validator. Supports JSON Schema draft-04/06/07/2019-09/2020-12 and JSON Type Definition (RFC8927)](https://github.com/ajv-validator/ajv)

[jsonschema — jsonschema 3.2.0 documentation](https://python-jsonschema.readthedocs.io/en/stable/)

[keleshev/schema: Schema validation just got Pythonic](https://github.com/keleshev/schema)

[cypress-io/schema-tools: Validate, sanitize and document JSON schemas](https://github.com/cypress-io/schema-tools)

## JavaScript Validators

[samchon/typescript-json: Super-fast Runtime type checkers (validators) and JSON.stringify() function](https://github.com/samchon/typescript-json) `TSON`, zod is slow

[Comparing schema validation libraries: Zod vs. Yup - LogRocket Blog](https://blog.logrocket.com/comparing-schema-validation-libraries-zod-vs-yup/) Yup is pre-TypeScript

[jquense/yup: Dead simple Object schema validation](https://github.com/jquense/yup)

[colinhacks/zod: TypeScript-first schema validation with static type inference](https://github.com/colinhacks/zod)
[Zod Tutorial | Total TypeScript](https://www.totaltypescript.com/tutorials/zod)

[mattkingshott/iodine: A micro JavaScript validation library.](https://github.com/mattkingshott/iodine)

[Introduction - Superstruct](https://docs.superstructjs.org/)
[ianstormtaylor/superstruct: A simple and composable way to validate data in JavaScript (and TypeScript).](https://github.com/ianstormtaylor/superstruct)

[oussamahamdaoui/forgJs: ForgJs is a javascript lightweight object validator. Go check the Quick start section and start coding with love](https://github.com/oussamahamdaoui/forgJs)

[Vest - Declarative Validations](https://vestjs.dev/#/) validate like writing test

[flowstudio/datalize: Parameter, query, form data validation and filtering for NodeJS.](https://github.com/flowstudio/datalize)
[Node.js Form Validation Using Datalize | Toptal](https://www.toptal.com/nodejs/smart-node-js-form-validation)

[philipnilsson/bueno: Composable validators for forms, API:s in TypeScript](https://github.com/philipnilsson/bueno)

### Joi

[joi.dev](https://joi.dev/)
[sideway/joi: The most powerful data validation library for JS](https://github.com/sideway/joi)
[v16.0.0 Release Notes · Issue #2037 · sideway/joi](https://github.com/sideway/joi/issues/2037) joi 16 is a rewrite

[joi.dev - API Reference](https://joi.dev/api/)
[RunKit + npm: joi](https://npm.runkit.com/joi)
[joi.dev - Schema Tester](https://joi.dev/tester/)
[tlivings/enjoi: Converts a JSON schema to a Joi schema.](https://github.com/tlivings/enjoi)

[joi/test at master · sideway/joi](https://github.com/sideway/joi/tree/master/test)
[What I’ve Learned Validating with Joi – ITNEXT](https://itnext.io/what-ive-learned-validating-with-joi-20007e2b2b68)
[What I've Learned Validating with Joi — Futurice](https://futurice.com/blog/what-ive-learned-validating-with-joi)
[Node API Schema Validation with Joi ― Scotch](https://scotch.io/tutorials/node-api-schema-validation-with-joi)
[Joi for Node: Exploring Javascript Object Schema Validation](https://medium.com/@rossbulat/joi-for-node-exploring-javascript-object-schema-validation-50dd4b8e1b0f)
[Joi — awesome code validation for Node.js and Express - DEV Community 👩‍💻👨‍💻](https://dev.to/itnext/joi-awesome-code-validation-for-node-js-and-express-35pk)

[Handling Joi validation errors in Hapi 17 – Piotr Karpala – Medium](https://medium.com/@piotrkarpaa/handling-joi-validation-errors-in-hapi-17-26fc07448576) ❗!important, return validation error to client

[Expressing complex logic in `when()` · Issue #1663 · sideway/joi](https://github.com/sideway/joi/issues/1663#issuecomment-441366556) use `when()` on schema

### Customize error message

[joi/API.md#list-of-errors at master · sideway/joi](https://github.com/sideway/joi/blob/master/API.md#list-of-errors)
[Node.js + Joi how to display a custom error messages? - Stack Overflow](https://stackoverflow.com/questions/48720942/node-js-joi-how-to-display-a-custom-error-messages)

[Joi validation error does not provide detailed information in response · Issue #3706 · hapijs/hapi](https://github.com/hapijs/hapi/issues/3706) in Hapi, `failAction()` is the best

## JSON

[A beginner's guide to JSON, the data format for the internet - Stack Overflow Blog](https://stackoverflow.blog/2022/06/02/a-beginners-guide-to-json-the-data-format-for-the-internet/)

7159 JSON
6901 JSON Pointer
6902 JSON Patch

[BSON (Binary JSON) Serialization](https://bsonspec.org/) MongoDB
[JSON and BSON | MongoDB](https://www.mongodb.com/json-and-bson)
[BSON Types — MongoDB Manual](https://docs.mongodb.com/manual/reference/bson-types/)
[mongodb/js-bson: BSON Parser for node and browser](https://github.com/mongodb/js-bson)

[CBOR — Concise Binary Object Representation | Overview](https://cbor.io/) Web Assembly

[jpmens/jo: JSON output from a shell](https://github.com/jpmens/jo)

[JSON ABC - Sort JSON Alphabetically](https://novicelab.org/jsonabc/)
[JSON Sorter - Sort JSON keys online](https://r37r0m0d3l.github.io/json_sort/) allows comments

[fastify/fast-json-stringify: 2x faster than JSON.stringify()](https://github.com/fastify/fast-json-stringify)

[JSON-LD - JSON for Linking Data](https://json-ld.org/)
[digitalbazaar/jsonld.js: A JSON-LD Processor and API implementation in JavaScript](https://github.com/digitalbazaar/jsonld.js)

[List of JSON tools for command line – Ilya's blog](https://ilya-sher.org/2018/04/10/list-of-json-tools-for-command-line/)

[msgspec](https://jcristharif.com/msgspec/)
[ijl/orjson: Fast, correct Python JSON library supporting dataclasses, datetimes, and numpy](https://github.com/ijl/orjson)
[Faster, more memory-efficient Python JSON parsing with msgspec](https://pythonspeed.com/articles/faster-python-json-parsing/)
[Processing large JSON files in Python without running out of memory](https://pythonspeed.com/articles/json-memory-streaming/)

## TOML

[TOML: English v1.0.0](https://toml.io/en/v1.0.0)

[tomllib — Parse TOML files — Python 3 documentation](https://docs.python.org/3.11/library/tomllib.html) 3.11+, essentially `tomli`
[hukkin/tomli: A lil' TOML parser](https://github.com/hukkin/tomli)
[sdispater/tomlkit: Style-preserving TOML library for Python](https://github.com/sdispater/tomlkit)

[Python and TOML: New Best Friends – Real Python](https://realpython.com/python-toml/)

[Taplo | A versatile TOML toolkit.](https://taplo.tamasfe.dev/)

## YAML

[YAML™ Specification Index](https://yaml.org/spec/)

[PyYAML Documentation](https://pyyaml.org/wiki/PyYAMLDocumentation)
[YAML: The Missing Battery in Python – Real Python](https://realpython.com/python-yaml/)

## CUE

[CUE](https://cuelang.org/)
[Introduction | CUE](https://cuelang.org/docs/tutorials/tour/intro/)
[Documentation | CUE](https://cuelang.org/docs/)
[CUE Playground](https://cuelang.org/play/)

[Cuetorials](https://cuetorials.com/)
[CUE is an exciting configuration language — Bitfield Consulting](https://bitfieldconsulting.com/golang/cuelang-exciting)
[Configuring Kubernetes with CUE · garethr.dev](https://garethr.dev/2019/04/configuring-kubernetes-with-cue/)

[CUE: a data constraint language and shoo-in for Go. Marcel van Lohuizen, Google. - YouTube](https://www.youtube.com/watch?v=b3fhA12KS48)
[GopherCon Europe 2020: Marcel van Lohuizen - Better APIs with Shareable Validation Logic - YouTube](https://www.youtube.com/watch?v=IRNluM2B4p8)

## Protocol Buffers

[Protocol Buffers | Google Developers](https://developers.google.com/protocol-buffers/)
[Protocol Buffers - Wikiwand](https://www.wikiwand.com/en/Protocol_Buffers)

[Protocol Buffers Crash Course - YouTube](https://www.youtube.com/watch?v=46O73On0gyI)

[Protocol Buffers, Part 1 — Serialization Library for Microservices](https://codeburst.io/protocol-buffers-part-1-serialization-library-for-microservices-37418e72908b)
[Protocol Buffers, Part 2 — The Untold Parts Of Using “Any”](https://codeburst.io/protocol-buffers-part-2-the-untold-parts-of-using-any-6a328560048d)

[Buf | Home](https://buf.build/)

## MessagePack

[MessagePack: It's like JSON. but fast and small.](https://msgpack.org/index.html)
[MessagePack](https://github.com/msgpack)

[mcollina/msgpack5: A msgpack v5 implementation for node.js, with extension points / msgpack.org[Node]](https://github.com/mcollina/msgpack5)

[neuecc/MessagePack-CSharp: Extremely Fast MessagePack Serializer for C#(.NET, .NET Core, Unity, Xamarin). / msgpack.org[C#]](https://github.com/neuecc/MessagePack-CSharp)

[msgpack/msgpack-python: MessagePack serializer implementation for Python msgpack.org[Python]](https://github.com/msgpack/msgpack-python)

### Node

[keywords:messagepack - npm search](https://www.npmjs.com/search?q=keywords:messagepack)
[mattheworiordan/nodejs-encoding-benchmarks: Simple repo to benchmark performance of Node.js encoding libraries](https://github.com/mattheworiordan/nodejs-encoding-benchmarks)
[msgpack/msgpack-javascript: @msgpack/msgpack - MessagePack for JavaScript/TypeScript/ECMA-262 / msgpack.org[JavaScript]](https://github.com/msgpack/msgpack-javascript)
[kawanet/msgpack-lite: Fast Pure JavaScript MessagePack Encoder and Decoder / msgpack.org[JavaScript]](https://github.com/kawanet/msgpack-lite)

## Apache Arrow/Feather

[apache/arrow: Apache Arrow is a multi-language toolbox for accelerated data interchange and in-memory processing](https://github.com/apache/arrow)

[PyArrow - Apache Arrow Python bindings — Apache Arrow v6.0.0](https://arrow.apache.org/docs/python/index.html)
[arrow package - github.com/apache/arrow/go/arrow - pkg.go.dev](https://pkg.go.dev/github.com/apache/arrow/go/arrow?utm_source=godoc)
[Apache Arrow - v6.0.0](https://arrow.apache.org/docs/js/)
[arrow/js at master · apache/arrow](https://github.com/apache/arrow/tree/master/js)

Feather is now part of Apache Arrow

[wesm/feather: Feather: fast, interoperable binary data frame storage for Python, R, and more powered by Apache Arrow](https://github.com/wesm/feather)
[Feather: A Fast On-Disk Format for Data Frames for R and Python, powered by Apache Arrow - RStudio](https://www.rstudio.com/blog/feather/)

## Apache Thrift

[Apache Thrift - Home](https://thrift.apache.org/)
[Reconciling GraphQL and Thrift at Airbnb - Airbnb Engineering & Data Science - Medium](https://medium.com/airbnb-engineering/reconciling-graphql-and-thrift-at-airbnb-a97e8d290712)

## Apache Parquet

[Apache Parquet](https://parquet.apache.org/) compatible to Pandas DataFrame
[apache/parquet-format: Apache Parquet](https://github.com/apache/parquet-format)

[Reading and Writing the Apache Parquet Format — Apache Arrow v6.0.1](https://arrow.apache.org/docs/python/parquet.html)

[xitongsys/parquet-go: pure golang library for reading/writing parquet file](https://github.com/xitongsys/parquet-go/)
[Processing parquet files in Golang - DEV Community](https://dev.to/eminetto/processing-parquet-files-in-golang-1nni)

[fastparquet documentation](https://fastparquet.readthedocs.io/en/latest/)

[Inspect Parquet from command line - Stack Overflow](https://stackoverflow.com/questions/36140264/inspect-parquet-from-command-line)
[parquet-tools · PyPI](https://pypi.org/project/parquet-tools/)
[parquet-cli · PyPI](https://pypi.org/project/parquet-cli/)

`pyarrow` also loads Parquet
[Development update: High speed Apache Parquet in Python with Apache Arrow - Wes McKinney](https://wesmckinney.com/blog/python-parquet-update/)

## Apache ORC

[Apache ORC • High-Performance Columnar Storage for Hadoop](https://orc.apache.org/)

## HDF

[The HDF5® Library & File Format - The HDF Group](https://www.hdfgroup.org/solutions/hdf5)

[HDFGroup Documentation](https://portal.hdfgroup.org/display/support/Documentation)
[Learning HDF5](https://portal.hdfgroup.org/display/HDF5/Learning+HDF5)
[Using the HDF5 Command-line Tools](https://portal.hdfgroup.org/display/HDF5/Using+the+HDF5+Command-line+Tools)
[Introduction to HDF5 | Quincey Koziol, The HDF Group - YouTube](https://www.youtube.com/watch?v=BAjsCldRMMc)
[Parallel HDF5 | Quincey Koziol, The HDF Group - YouTube](https://www.youtube.com/watch?v=qrI27pI0P1E)
[A Brief Introduction to HDF5](https://mark.douthwaite.io/a-brief-intro-tohdf5/)

[HDF Group - HDF5](https://support.hdfgroup.org/HDF5/) old portal
<https://support.hdfgroup.org/HDF5/docNewFeatures/SWMR/Design-HDF5-FileLocking.pdf>

[Parallel I/O – Why, How, and Where to? - The HDF Group](https://www.hdfgroup.org/2015/04/parallel-io-why-how-and-where-to-hdf5/)

[Cyrille Rossant - Moving away from HDF5](https://cyrille.rossant.net/moving-away-hdf5/)
[Cyrille Rossant - Should you use HDF5?](https://cyrille.rossant.net/should-you-use-hdf5/)
[On HDF5 and the future of data management](http://blog.khinsen.net/posts/2016/01/07/on-hdf5-and-the-future-of-data-management/)

[HDF5 for Python — h5py documentation](https://docs.h5py.org/en/stable/)
[Save Pandas objects to HDF5 - DEV Community](https://dev.to/epassaro/gsoc-2019-june-ii-fjk)

[gonum/hdf5: hdf5 is a wrapper for the HDF5 library](https://github.com/gonum/hdf5)
[hdf5 package - gonum.org/v1/hdf5 - pkg.go.dev](https://pkg.go.dev/gonum.org/v1/hdf5)

## CDF

[CDF Home Page](https://cdf.gsfc.nasa.gov/)

[Unidata | NetCDF](https://www.unidata.ucar.edu/software/netcdf/)
[NetCDF Why and How: Creating Publication Quality NetCDF Datasets - YouTube](https://www.youtube.com/watch?v=7YYTXa4qyfo)
[Tutorial - Introduction to the NetCDF format - YouTube](https://www.youtube.com/watch?v=K1_8EqCJlwo)
[Visualising data in NetCDF format - YouTube](https://www.youtube.com/watch?v=XqoetylQAIY)

## ASDF

[ASDF Standard — ASDF Standard documentation](https://asdf-standard.readthedocs.io/en/latest/#)

## FlatBuffers

[FlatBuffers: FlatBuffers](https://google.github.io/flatbuffers/) very similar to Protobuf

[What's the difference between Protocol Buffers and Flatbuffers? - Stack Overflow](https://stackoverflow.com/questions/25356551/whats-the-difference-between-protocol-buffers-and-flatbuffers)
[JSON vs Protocol Buffers vs FlatBuffers | by Kartik Khare | codeburst](https://codeburst.io/json-vs-protocol-buffers-vs-flatbuffers-a4247f8bda6f)

> Protocol Buffers is indeed relatively similar to FlatBuffers, with the primary difference being that FlatBuffers does not need a parsing/ unpacking step to a secondary representation before you can access data, often coupled with per-object memory allocation. The code is an order of magnitude bigger, too. Protocol Buffers has no optional text import/export.

[FlatBuffers: Use in C#](https://google.github.io/flatbuffers/flatbuffers_guide_use_c-sharp.html)
[FlatBuffers: Use in JavaScript](https://google.github.io/flatbuffers/flatbuffers_guide_use_javascript.html)
[FlatBuffers: Use in Python](https://google.github.io/flatbuffers/flatbuffers_guide_use_python.html)

## Cap'n Proto

[Cap'n Proto: Introduction](https://capnproto.org/)
[Cap'n Proto: Cap'n Proto, FlatBuffers, and SBE](https://capnproto.org/news/2014-06-17-capnproto-flatbuffers-sbe.html)

## Simple Binary Encoding

[Mechanical Sympathy: Simple Binary Encoding](https://mechanical-sympathy.blogspot.com/2014/05/simple-binary-encoding.html)
[real-logic.github.io/simple-binary-encoding](http://real-logic.github.io/simple-binary-encoding/)
[real-logic/simple-binary-encoding: Simple Binary Encoding (SBE) - High Performance Message Codec](https://github.com/real-logic/simple-binary-encoding)

## C++

[What's the most mature JSON library for C++? Support for JSON Schema is a plus. - Quora](https://www.quora.com/Whats-the-most-mature-JSON-library-for-C-Support-for-JSON-Schema-is-a-plus)

[miloyip/nativejson-benchmark: C/C++ JSON parser/generator benchmark](https://github.com/miloyip/nativejson-benchmark)

[cereal Docs - Main](https://uscilab.github.io/cereal/)
[USCiLab/cereal: A C++11 library for serialization](https://github.com/USCiLab/cereal)

[RapidJSON: Main Page](http://rapidjson.org/)
[Tencent/rapidjson: A fast JSON parser/generator for C++ with both SAX/DOM style API](https://github.com/Tencent/rapidjson)
[Martchus/reflective-rapidjson: Code generator for serializing/deserializing C++ objects to/from JSON using Clang and RapidJSON](https://github.com/Martchus/reflective-rapidjson)

[JSON for Modern C++: JSON for Modern C++](https://nlohmann.github.io/json/)
[nlohmann/json: JSON for Modern C++](https://github.com/nlohmann/json)
[pboettch/json-schema-validator: JSON schema validator for JSON for Modern C++](https://github.com/pboettch/json-schema-validator)

[Jansson — C library for working with JSON data](http://www.digip.org/jansson/)
[Jansson Documentation — Jansson documentation](https://jansson.readthedocs.io/)
[akheron/jansson: C library for encoding, decoding and manipulating JSON data](https://github.com/akheron/jansson)

## C&#35;

[Serializing JSON Data into Binary Form | DotNetCurry](https://www.dotnetcurry.com/csharp/1279/serialize-json-data-binary)

## Rust

[Serde](https://serde.rs/) Serialization framework for Rust [GitHub](https://github.com/serde-rs/serde)

[sharksforarms/deku: Declarative binary reading and writing: bit-level, symmetric, serialization/deserialization](https://github.com/sharksforarms/deku)

[TimelyDataflow/abomonation: A mortifying serialization library for Rust](https://github.com/TimelyDataflow/abomonation) works even with pointers

## Go

[fatih/gomodifytags: Go tool to modify struct field tags](https://github.com/fatih/gomodifytags) for JSON serialization

[Several ways of serialization and deserialization of golang | Develop Paper](https://developpaper.com/several-ways-of-serialization-and-deserialization-of-golang/)
[Ellerbach/Golang-Json-serialize-deserialize: Go (Golang) Json serialization and deserialization practices](https://github.com/Ellerbach/Golang-Json-serialize-deserialize)

[smallnest/gosercomp: Golang Serializer Benchmark Comparison](https://github.com/smallnest/gosercomp)

[gob package - encoding/gob - pkg.go.dev](https://pkg.go.dev/encoding/gob) native codec for Go

[glycerine/zebrapack: ZebraPack format is like gobs version 2: serialization in Go, _but_ extremely fast and friendly to other languages. Use Go as your schema. Strong typing. Well documented (and msgpack2 compatible) format so other languages can be readily supported. See also https://github.com/glycerine/greenpack for a more recent alternative. Docs:](https://github.com/glycerine/zebrapack)
[glycerine/greenpack: Cross-language serialization for Golang: greenpack adds versioning, stronger typing, and optional schema atop msgpack2. `greenpack -msgpack2` produces classic msgpack2, and handles nils. Cousin to ZebraPack (https://github.com/glycerine/zebrapack), greenpack's advantage is fully self-describing data. Oh, and faster than protobufs.](https://github.com/glycerine/greenpack)

[microhq/go-bson: A copy of youtube/vitess/go/bson](https://github.com/microhq/go-bson)

## Java

[Java Object Serialization Specification: Contents](https://docs.oracle.com/javase/8/docs/platform/serialization/spec/serialTOC.html)
[java.io](https://www.npmjs.com/package/java.io) A node implementation
[jdeserialize](https://code.google.com/archive/p/jdeserialize/)

[The Java serialization algorithm revealed | JavaWorld](http://www.javaworld.com/article/2072752/the-java-serialization-algorithm-revealed.html)
[5 things you didn't know about ... Java Object Serialization](http://www.ibm.com/developerworks/library/j-5things1/)
[Serialization and Deserialization in Java example using Serializable Interface | CodinGeek](http://www.codingeek.com/java/io/object-streams-serialization-deserialization-java-example-serializable-interface/) `transient` field will not be serialized

## Kotlinx

[An Extensive Kotlinx Serializer Library For Serialization | Android | Kotlin](https://ahsensaeed.com/kotlinx-serialization-library-android-kotlin/)

## Python

[12.1. pickle — Python object serialization — Python documentation](https://docs.python.org/3/library/pickle.html)
[Pickle’s nine flaws | Ned Batchelder](https://nedbatchelder.com/blog/202006/pickles_nine_flaws.html)

[Serialization and Deserialization of Python Objects: Part 1](https://code.tutsplus.com/tutorials/serialization-and-deserialization-of-python-objects-part-1--cms-26183)
[Serialization and Deserialization of Python Objects: Part 2](https://code.tutsplus.com/tutorials/serialization-and-deserialization-of-python-objects-part-2--cms-26184)
[Object serialization in Python ~ The Python Corner](https://www.thepythoncorner.com/2018/05/object-serialization-inpython.html)

[construct/construct: Construct: Declarative data structures for python that allow symmetric parsing and building](https://github.com/construct/construct)

[Serialize · PyPI](https://pypi.org/project/Serialize/)

[serpent · PyPI](https://pypi.org/project/serpent/)

[marshmallow: simplified object serialization — marshmallow documentation](https://marshmallow.readthedocs.io/en/stable/)
[marshmallow-code/marshmallow: A lightweight library for converting complex objects to and from simple Python datatypes.](https://github.com/marshmallow-code/marshmallow)

[serpy: ridiculously fast object serialization — serpy documentation](https://serpy.readthedocs.io/en/latest/)
[JSON Serialization in Python using serpy – Twilio Cloud Communications Blog](https://www.twilio.com/blog/2017/08/json-serialization-in-python-using-serpy.html)
[Working With JSON Data in Python – Real Python](https://realpython.com/python-json/)
[Reading and Writing JSON in Python - The Python Guru](https://thepythonguru.com/reading-and-writing-json-in-python/)

[Better Python Object Serialization · Homepage of Hynek Schlawack](https://hynek.me/articles/serialization/)

[Efficiently Store Pandas DataFrames](http://matthewrocklin.com/blog/work/2015/03/16/Fast-Serialization)

### Python Validators

[keleshev/schema: Schema validation just got Pythonic](https://github.com/keleshev/schema)
[Introduction to Schema: A Python Libary to Validate your Data | by Khuyen Tran | Towards Data Science](https://towardsdatascience.com/introduction-to-schema-a-python-libary-to-validate-your-data-c6d99e06d56a)
[Data-science/schema.ipynb at master · khuyentran1401/Data-science](https://github.com/khuyentran1401/Data-science/blob/master/data_science_tools/schema.ipynb)

[Welcome to Cerberus — Cerberus is a lightweight and extensible data validation library for Python](https://docs.python-cerberus.org/en/stable/)
[Do Not Use If-Else For Validating Data Objects In Python Anymore | by Christopher Tao | May, 2022 | Towards Data Science](https://towardsdatascience.com/do-not-use-if-else-for-validating-data-objects-in-python-anymore-17203e1d65fe)
