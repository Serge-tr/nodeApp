const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to Mongo');
    }
    console.log('Connected to Mongo server');

    db.collection('Todos').deleteMany({text: "Eat the egg"}).then((result) => {
        console.log(`Deleted: ${result}`);
    });

    //db.close();
});