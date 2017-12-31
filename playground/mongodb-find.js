// const MongoClient = require('mongodb');
// sintassi equivalente
const { MongoClient, ObjectId } = require('mongodb');

var obj = new ObjectId();
console.log(obj);

var user = { name: 'Maurizio', età: 53 };
var { età } = user;
console.log(età);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    //APRO LA CONNESSIONE
    if (err) {
        return console.log('impossibile connettersi al database');
    }
    console.log('Database connesso');

    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Non riesco a trovare Todos:', err);
    });

    // solo i completati
    db.collection('Todos').find({ completed: false }).toArray().then((docs) => {
        console.log('Query per trovare solo i lavori non completati');
        console.log('risultati trovati:', docs.length);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Errore ', err);
    });


    db.collection('Todos').find({ _id: new ObjectId('5a4791a2c37eff5a5aeb8bcb') }).toArray().then((docs) => {
        console.log('Query per trovare attraverso id ');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Errore ', err);
    });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Utilizzo di count ${count}`);
    }, (err) => {
        console.log('Errore ', err);
    });

    db.collection('Users').find({ name: 'Maurizio' }).toArray().then((docs) => {
        console.log('Query per trovare attraverso id ');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Errore ', err);
    });


    db.close(() => {
        console.log('connessione chiusa');
    });
});