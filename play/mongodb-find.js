const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to Mongo');
    }
    console.log('Connected to Mongo server');

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);       
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });


    db.collection('Text').find({text: 'fuck the dog'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));       
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //db.close();
});