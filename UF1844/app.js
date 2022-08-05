const express = require('express');
    const baseDadesCandidats = [{
        nom: "Mario",
        cognoms: "Casas",
        email: "mcasas@gestmedia.es"
    },
    {
        nom: "Anabel",
        cognoms: "Alonso",
        email: "aalonso@gestmedia.es"
    },
    {
        nom: "Carlos",
        cognoms: "Cuevas",
        email: "ccuevas@tv3.cat"
    }

]
const baseDadesBuida = [];

const app = express();

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("This is our main page!");
});

app.get('/add-candidate', (req, res) => {
    res.render("formulario");
});

app.listen(3000);