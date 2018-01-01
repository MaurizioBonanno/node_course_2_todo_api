const express = require('express');
const bodyparser = require('body-parser');
const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();


app.use(bodyparser.json());


app.post('/todos', function(req, res) {
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        console.log('Nota salvata con successo', doc);
        res.send(doc);
    }, (e) => {
        console.log('errore nel salvataggio dei dati', e);
        res.send(e);
    })
});


app.listen(3000, function() {
    console.log('App listening on port 3000!');
});

// //Save something



// // var newTodo = new Todo({
// //     text: 'Cook dinner'
// // });
// // newTodo.save().then((todo) => {
// //     console.log('Todo Salvato', todo);
// // }, (e) => {
// //     console.log('Non posso salvare i dati', e);
// // });

// // var otherTodo = new Todo({
// //     text: 'Dar da mangiare al gatto',
// //     completed: false,
// //     completedAt: 123
// // });

// // otherTodo.save().then((doc) => {
// //     console.log(JSON.stringify(doc, undefined, 2));
// // }, (e) => {
// //     console.log('Impossibile salvare i dati');
// // });



// var user = new User({
//     email: 'io@example.com'
// });
// user.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log(e);
// });