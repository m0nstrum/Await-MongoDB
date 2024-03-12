/**
 * Функция для выполнения операций в базе данных MongoDB.
 * Function for performing operations in MongoDB database.
 * @param {string} url - URL для подключения к базе данных. / URL for connecting to the database.
 * @param {string} dbname - Имя базы данных. / Name of the database.
 * @param {string} action - Действие, которое нужно выполнить. Возможные значения: 'find', 'sort', 'insertOne', 'insertMany', 'deleteOne', 'deleteMany', 'updateOne', 'updateMany', 'createIndex'. / The action to perform. Possible values: 'find', 'sort', 'insertOne', 'insertMany', 'deleteOne', 'deleteMany', 'updateOne', 'updateMany', 'createIndex'.
 * @param {string} collection - Имя коллекции, в которой нужно выполнить действие. / Name of the collection to perform the action on.
 * @param {Object} query - Запрос, который нужно выполнить (необязательно). / The query to perform (optional).
 * @param {Object} newvalue - Новое значение для операции (необязательно). / The new value for the operation (optional).
 * @returns {Promise} Промис, который разрешается с результатом операции в базе данных. / A Promise that resolves with the result of the operation in the database.
 * Пример использования 'find' или 'sort'
 * Example usage of 'find' or 'sort'
 * await mongo(url, 'mydb', 'find', 'mycollection', { name: 'John' });
 * await mongo(url, 'mydb', 'sort', 'mycollection', { name: 'John' }, { age:1 });
 * Пример использования 'insertOne'
 * Example usage of 'insertOne'
 * await mongo(url, 'mydb', 'insertOne', 'mycollection', { name: 'John' });
 * Пример использования 'insertMany'
 * Example usage of 'insertMany'
 * await mongo(url, 'mydb', 'insertMany', 'mycollection', [{ name: 'John' }, { name: 'Doe' }]);
 * Пример использования 'deleteOne'
 * Example usage of 'deleteOne'
 * await mongo(url, 'mydb', 'deleteOne', 'mycollection', { name: 'John' });
 * Пример использования 'deleteMany'
 * Example usage of 'deleteMany'
 * await mongo(url, 'mydb', 'deleteMany', 'mycollection', { name: 'John' });
 * Пример использования 'updateOne'
 * Example usage of 'updateOne'
 * await mongo(url, 'mydb', 'updateOne', 'mycollection', { name: 'John' }, { $set: { age: 30 } });
 * Пример использования 'updateMany'
 * Example usage of 'updateMany'
 * await mongo(url, 'mydb', 'updateMany', 'mycollection', { name: 'John' }, { $set: { age: 30 } });
 * Пример использования 'createIndex'
 * Example usage of 'createIndex'
 * await mongo(url, 'mydb', 'createIndex', 'mycollection', { name: 1 });
 */
const { MongoClient } = require('mongodb');

module.exports = async function(url, dbname, action, collection, query, newvalue) {
    const options = { useNewUrlParser: true, useUnifiedTopology: true };
    let client;

    try {
        client = await MongoClient.connect(url, options);
        const dbo = client.db(dbname);

        if (action === 'find' || action === 'sort') {
            // Пример использования 'find' или 'sort'
            // Example usage of 'find' or 'sort'
            // await mongo(url, 'mydb', 'find', 'mycollection', { name: 'John' });
            // await mongo(url, 'mydb', 'sort', 'mycollection', { name: 'John' }, { age:1 });

            let result;
            if (query && newvalue) {
                result = await dbo.collection(collection).find(query).sort(newvalue).toArray();
            } else {
                result = await dbo.collection(collection).find(query).toArray();
            }
            return result;
        } else if (action === 'insertOne') {
            // Пример использования 'insertOne'
            // Example usage of 'insertOne'
            // await mongo(url, 'mydb', 'insertOne', 'mycollection', { name: 'John' });

            const result = await dbo.collection(collection).insertOne(newvalue);
            return result;
        } else if (action === 'insertMany') {
            // Пример использования 'insertMany'
            // Example usage of 'insertMany'
            // await mongo(url, 'mydb', 'insertMany', 'mycollection', [{ name: 'John' }, { name: 'Doe' }]);

            const result = await dbo.collection(collection).insertMany(newvalue);
            return result;
        } else if (action === 'deleteOne') {
            // Пример использования 'deleteOne'
            // Example usage of 'deleteOne'
            // await mongo(url, 'mydb', 'deleteOne', 'mycollection', { name: 'John' });

            const result = await dbo.collection(collection).deleteOne(query);
            return result;
        } else if (action === 'deleteMany') {
            // Пример использования 'deleteMany'
            // Example usage of 'deleteMany'
            // await mongo(url, 'mydb', 'deleteMany', 'mycollection', { name: 'John' });

            const result = await dbo.collection(collection).deleteMany(query);
            return result;
        } else if (action === 'updateOne') {
            // Пример использования 'updateOne'
            // Example usage of 'updateOne'
            // await mongo(url, 'mydb', 'updateOne', 'mycollection', { name: 'John' }, { $set: { age: 30 } });

            const result = await dbo.collection(collection).updateOne(query, newvalue);
            return result;
        } else if (action === 'updateMany') {
            // Пример использования 'updateMany'
            // Example usage of 'updateMany'
            // await mongo(url, 'mydb', 'updateMany', 'mycollection', { name: 'John' }, { $set: { age: 30 } });

            const result = await dbo.collection(collection).updateMany(query, newvalue);
            return result;
        } else if (action === 'createIndex') {
            // Пример использования 'createIndex'
            // Example usage of 'createIndex'
            // await mongo(url, 'mydb', 'createIndex', 'mycollection', { name: 1 });

            const result = await dbo.collection(collection).createIndex(query);
            return result;
        } else {
            throw new Error('Unknown action');
        }
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    } finally {
        if (client) {
            client.close();
        }
    }
};