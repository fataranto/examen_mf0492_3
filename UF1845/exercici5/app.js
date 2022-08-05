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
 //Selecciona tots els camps de la taula products, que tenen un ‘list_price’ igual o major a 39; i la categoria del producte és ‘Sauces’

/* const query1 = 'SELECT * FROM products WHERE list_price >= 39 AND category = "Sauces"';

connection.query(query1, function(error, results) {
    if (error) {
        console.log("Error1!: ", err);
        return;
    }
    console.log('The solution for Query1 is: ', results);
}); */

/**
 * APARTAT 2
 */
var options = {
     min: 60,
     max: 75,
     integer: true
 }
 var randomId = rn(options);
 //console.log("Identificador obtingut: ", randomId);

  const query2 = "SELECT * FROM orders WHERE id = " + randomId;

 connection.query(query2, function(error, results) {
     if (error) {
         console.log("Error2!: ", err);
         return;
     }
     //console.log('The solution for Query2 is: ', results);

     //console.log(results[0].ship_name)

     //console.log(results[0].payment_type);
        var payment = "";
        if (results[0].payment_type == "Cash") {
            payment = "va pagar en efectiu";
        } else {
            payment = "va pagar amb txec o targeta de crèdit";
        }

        console.log(`${results[0].ship_name} ${payment}`);

 }); 


connection.end();