const express = require("express");
const path = require("path");
const app = express();

const mongoose = require("mongoose");
const url = "mongodb+srv://root:root@cluster0.f04cy.mongodb.net/phoneShop";

app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended: false
}));


/* const Schema = mongoose.Schema;

let smartphoneSchema = new Schema({
    model: String,
    price: Number,
});


const Smartphones = mongoose.model("smartphone", smartphoneSchema);
   */


app.get("/add-new", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "add-new.html"));
})

app.post("/add-new", (req, res) => {
    const model = req.body.model;
    const price = req.body.price;
    //console.log(model, price);
    const newSmartphone = new Smartphones({
        model: model,
        price: price
    });

    console.log(newSmartphone);

    newSmartphone.save()
        .then(() => {
            res.redirect("/list-phones");
        })
        .catch(err => {
            console.log(err);
        });


});

app.get("/list-phones", (req, res) => {
    //mostrat tots els smartphones por consola
    console.log(req.params);

/*     Smartphones.find()

        .then(smartphones => {
            res.render("list-phones", {
                phones: smartphones
            });
        }) */
})

mongoose.connect(url, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Connection OK!");
        doWork();
    })
    .catch(err => console.log("Error!!: ", err));

function doWork() {

    const Schema = mongoose.Schema;

    let smartphoneSchema = new Schema({
        model: String,
        price: Number,
    });

    const Smartphones = mongoose.model("smartphone", smartphoneSchema);

}

app.listen(3000);