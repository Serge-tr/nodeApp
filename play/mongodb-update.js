const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to Mongo');
    }
    console.log('Connected to Mongo server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5923354921a98594b70d8204')
    }, {
        $set: {
            completed: false,
            text: 'Serge'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});1