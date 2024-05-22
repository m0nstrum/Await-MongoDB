"# Await-MongoDB" 
little await mongodb helper <br/>
All methods are described [here](https://www.w3schools.com/nodejs/nodejs_mongodb.asp) <br/>
Standard view: 
```js
const mongo = require('awaitmongodb')
var result = await awaitmongo(url, dbname, action, collection, query, newvalue)
```
* url - url of mongodb, looks like this - 'mongodb://<dbuser>:<dbpassword>@gs111111.mlab.com:11111/kdjdh23857'
* dbname - name of database
* action - action to do(insertOne, etc)
* collection - collection name
* query - object to insert|find etc
* newvalue - object, updates query

This function allows you to perform various operations in a MongoDB database, such as finding, sorting, inserting, deleting, and updating data.

## Parameters

- `url` (string): The URL for connecting to the database.
- `dbname` (string): The name of the database.
- `action` (string): The action to perform. Possible values:
  - `'find'`: Retrieves documents that match the query criteria.
  - `'sort'`: Sorts the result set according to the specified sort criteria.
  - `'insertOne'`: Inserts a single document.
  - `'insertMany'`: Inserts multiple documents.
  - `'deleteOne'`: Deletes a single document.
  - `'deleteMany'`: Deletes multiple documents.
  - `'updateOne'`: Updates a single document.
  - `'updateMany'`: Updates multiple documents.
  - `'createIndex'`: Creates an index on the specified field(s).
- `collection` (string): The name of the collection to perform the action on.
- `query` (object, optional): The query to perform.
- `newvalue` (object, optional): The new value for the operation.

## Returns

A Promise that resolves with the result of the operation in the database. The result will depend on the action performed:

- `'find'` or `'sort'`: An array of documents that match the query.
- `'insertOne'` or `'insertMany'`: An object with information about the insert operation.
- `'deleteOne'` or `'deleteMany'`: An object with information about the delete operation.
- `'updateOne'` or `'updateMany'`: An object with information about the update operation.
- `'createIndex'`: An object with information about the index creation.

## Examples

### Find or Sort

```javascript
const result = await mongo(url, 'mydb', 'find', 'mycollection', { name: 'John' });
console.log(result); // Array of documents that match the query

const sortedResult = await mongo(url, 'mydb', 'sort', 'mycollection', { name: 'John' }, { age: 1 });
console.log(sortedResult); // Array of documents sorted by age
```

### Insert One

```javascript
const result = await mongo(url, 'mydb', 'insertOne', 'mycollection', { name: 'John' });
console.log(result); // Object with information about the insert operation
```

### Insert Many

```javascript
const result = await mongo(url, 'mydb', 'insertMany', 'mycollection', [{ name: 'John' }, { name: 'Doe' }]);
console.log(result); // Object with information about the insert operation
```

### Delete One

```javascript
const result = await mongo(url, 'mydb', 'deleteOne', 'mycollection', { name: 'John' });
console.log(result); // Object with information about the delete operation
```

### Delete Many

```javascript
const result = await mongo(url, 'mydb', 'deleteMany', 'mycollection', { name: 'John' });
console.log(result); // Object with information about the delete operation
```

### Update One

```javascript
const result = await mongo(url, 'mydb', 'updateOne', 'mycollection', { name: 'John' }, { $set: { age: 30 } });
console.log(result); // Object with information about the update operation
```

### Update Many

```javascript
const result = await mongo(url, 'mydb', 'updateMany', 'mycollection', { name: 'John' }, { $set: { age: 30 } });
console.log(result); // Object with information about the update operation
```

### Create Index

```javascript
const result = await mongo(url, 'mydb', 'createIndex', 'mycollection', { name: 1 });
console.log(result); // Object with information about the index creation
```