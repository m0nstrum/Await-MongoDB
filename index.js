const MongoClient = require('mongodb').MongoClient;
const mongo = require('mongodb')

module.exports = async function(url, dbname, action, collection, query, newvalue) {


if(action == 'find'){
    let toret = await MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
    let dbo = toret.db(dbname);
    let result = await dbo.collection(collection).find(query).toArray()
	toret.close()

	return result
}
else if(action == 'insertOne') {
   let toret = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    let dbo = toret.db(dbname);
	 let result = await dbo.collection(collection).insertOne(query)
	toret.close()

	return result

}
else if(action == 'insertMany') {
	 let toret = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    let dbo = toret.db(dbname);
	 let result = await dbo.collection(collection).insertMany(query)
	toret.close()
	 return result

}
else if(action == 'sort') {
	 let toret = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    let dbo = toret.db(dbname);
	 let result = await dbo.collection(collection).find(query).sort(newvalue).toArray()
	toret.close()

	return result

}
else if(action == 'deleteOne') {
	 let toret = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    let dbo = toret.db(dbname);
	 let result = await dbo.collection(collection).deleteOne(query)
	toret.close()

	return result
}
else if(action == 'deleteMany') {
	 let toret = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    let dbo = toret.db(dbname);
	 let result = await dbo.collection(collection).deleteMany(query)
	toret.close()

	return result
}
else if(action == 'updateOne') {
	 let toret = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    let dbo = toret.db(dbname);
	 let result = await dbo.collection(collection).updateOne(query, newvalue)
	toret.close()

	return result
}
else if(action == 'updateMany') {
	 let toret = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    let dbo = toret.db(dbname);
	 let result = await dbo.collection(collection).updateMany(query, newvalue)
	toret.close()

	return result
}
else {
	return 'unknown action'
}

}