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
    // //FACCIO QUALCOSA COL DATABASE
    // db.collection('Todos').insertOne({
    //     text: 'Qualcosa da fare',
    //     completed: false
    // }, (err, result) => {
    //     if (err) { throw err };
    //     console.log(JSON.stringify(result.ops));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Maurizio',
    //     età: 53,
    //     location: 'Genova'
    // }, (err, result) => {
    //     if (err) { throw err };
    //     console.log(JSON.stringify(result.ops));
    // })

    //CHIUDO LA CONNESSIONE
    db.close(() => {
        console.log('connessione chiusa');
    });
});