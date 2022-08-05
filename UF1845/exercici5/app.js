var mysql = require('mysql');
var rn = require('random-number');

var connection = mysql.createConnection({
    host: 'bifywtpkx5ifl6i8g0dl-mysql.services.clever-cloud.com',
    user: 'u7vgmkxfkeoz13gr',
    password: 'StEwI530Fwhx6ojUhjuU',
    database: 'bifywtpkx5ifl6i8g0dl'
});

connection.connect();
/**
 * APARTAT 1
 */
const query1 = "";

connection.query(query1, function(error, results) {
    if (error) {
        console.log("Error1!: ", err);
        return;
    }
    console.log('The solution for Query1 is: ', results);
});
/**
 * APARTAT 2
 */
// var options = {
//     min: 60,
//     max: 75,
//     integer: true
// }
// var randomId = rn(options);
// console.log("Identificador obtingut: ", randomId);
// const query2 = "";

// connection.query(query2, function(error, results) {
//     if (error) {
//         console.log("Error2!: ", err);
//         return;
//     }
//     console.log('The solution for Query2 is: ', results);
// });


connection.end();