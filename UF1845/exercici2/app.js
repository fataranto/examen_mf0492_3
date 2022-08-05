const MongoClient = require('mongodb').MongoClient;

// Connection URL
/* Host de connexió: cluster0-lo8dg.mongodb.net
Nom d’usuari: cuidador
Password: gorilabonic
Nom de la base de dades: zoo
Nom de la col·lecció: animales */

const url = "mongodb+srv://cuidador:gorilabonic@cluster0-lo8dg.mongodb.net";

// Database Name
const dbName = "zoo";

// Collection
const collectionName = "animales";

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
    if (err) {
        console.log("Error!", err);
        return;
    }

    const db = client.db(dbName);
    db.collection(collectionName).find().toArray((err, result) => {
        console.log(result);
        client.close();
    })
});