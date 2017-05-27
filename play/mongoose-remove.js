const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove()

Todo.findByIdAndRemove('59255aea9a2cbc38b08b66e7').then((todo) => {
    console.log(todo)
});

