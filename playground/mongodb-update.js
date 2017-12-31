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
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectId('5a4791a2c37eff5a5aeb8bcb')
    }, {
        $set: {
            completed: true
        }
    }, { returnOriginal: false }).then((result) => {
        console.log(result);
    });


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId('5a4791a2c37eff5a5aeb8bcc')
    }, {
        $inc: {
            età: 1
        }
    }, { returnOriginal: false }).then((result) => {
        console.log(result);
    });

    //CHIUDO LA CONNESSIONE
    // db.close(() => {
    //     console.log('connessione chiusa');
    // });
});