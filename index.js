const MongoClient = require('mongodb').MongoClient;
const mongo = require('mongodb')

module.exports = async function(url, dbname, action, collection, query, newvalue) {



    let toret = await MongoClient.connect(url)
    let dbo = toret.db(dbName);
    let result = await dbo.collection("perms").find(query).toArray()

}