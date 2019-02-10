"# Await-MongoDB" 
little await mongodb helper <br/>
All methods are described [here](https://www.w3schools.com/nodejs/nodejs_mongodb.asp) <br/>
Standard view: 
```js
const awaitmongo = require('awaitmongodb')
var result = await awaitmongo(url, dbname, action, collection, query, newvalue)
```
* url - url of mongodb, looks like this - 'mongodb://<dbuser>:<dbpassword>@gs111111.mlab.com:11111/kdjdh23857'
* dbname - name of database
* action - action to do(insertOne, etc)
* collection - collection name
* query - object to insert|find etc
* newvalue - object, updates query
