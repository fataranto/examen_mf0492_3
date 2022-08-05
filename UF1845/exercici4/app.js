const express = require("express");
const path = require("path");
const app = express();

const mongoose = require("mongoose");
const url = "";

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));



app.get("/add-new", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "add-new.html"));
})

app.post("/add-new", (req, res) => {})

app.get("/list-phones", (req, res) => {})

mongoose.connect(url, { useNewUrlParser: true })
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