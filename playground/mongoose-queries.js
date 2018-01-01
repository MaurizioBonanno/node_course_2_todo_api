const { ObjectId } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

var id = '5a4a5a0484b7b31cc1ba8413';

if (!ObjectId.isValid(id)) {
    console.log('id non valido');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
}).catch((e) => {
    console.log(e);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
}).catch((e) => {
    console.log(e);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id non esistente');
    }
    console.log('Todo by id', todo);
}).catch((e) => {
    console.log(e);
});