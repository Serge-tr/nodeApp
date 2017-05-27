const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '59255aea9a2cbc38b08b66e6';

User.findById('59255aea9a2cbc38b08b66e6').then((user) => {
    if (!user) {
        console.log('net!');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => console.log(e));

// if (!ObjectID.isValid(id)) {
//     console.log('ID is not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('not found!')
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));