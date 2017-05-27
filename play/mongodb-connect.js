const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to Mongo');
    }
    console.log('Connected to Mongo server');

    db.collection('Todos').insertOne({
        text: 'Some text',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert', err)
        }
        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();
});