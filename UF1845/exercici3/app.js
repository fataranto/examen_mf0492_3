const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = "mongodb+srv://root:root@cluster0.f04cy.mongodb.net/";

// Database Name
const dbName = "sample_restaurants";

// Collection
const collectionName = "restaurants";

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
    if (err) {
        console.log("Error!", err);
        return;
    }

    const db = client.db(dbName);

    // Descomenta el codi a mesura que ho necessitis.


    //const query1 = {borough: "Staten Island"};
    const query1 = {
        borough: "Staten Island"
    };

    db.collection(collectionName).find(query1).toArray((err, result) => {
        console.log("Número de resultats query 1: ", result.length);
    })


    //restaurant_id >= 4036300 y zipcode = 10001;
    /*  const query2 = {
         $and: [
             {restaurant_id: {$gte: 4036300}},
             {zipcode: 11418}
         ]
     }; */

    //restaurant_id >= 4036300 y adress.zipcode = 10001;


    const query2 = {
        $and: [{
                restaurant_id: {
                    $gte: 40363590
                }
            },
            {
                address: {
                    zipcode: 11418
                }
            }
        ]
    };



    db.collection(collectionName).find(query2).toArray((err, result) => {
        console.log("Número de resultats query 2: ", result.length);
    })
});