// const MongoClient = require('mongodb');
// sintassi equivalente
const { MongoClient, ObjectId } = require('mongodb');

var obj = new ObjectId();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    //APRO LA CONNESSIONE
    if (err) {
        return console.log('impossibile connettersi al database');
    }
    console.log('Database connesso');
    // //FACCIO QUALCOSA COL DATABASE

    //deleteMany
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // })

    // //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete({ _id: new ObjectId('5a4791c8f443575a75d3e7b3') }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })

    //CHIUDO LA CONNESSIONE
    db.close(() => {
        console.log('connessione chiusa');
    });
});