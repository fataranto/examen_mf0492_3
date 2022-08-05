const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = "mongodb+srv://<username>:<password>@cluster0-lo8dg.mongodb.net";

// Database Name
const dbName = "";

// Collection
const collectionName = "";

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