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

//abrir la carpeta public
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("This is our main page!");
});

app.get('/add-candidate', (req, res) => {
    res.render("formulario");
});

app.post('/add-candidate', (req, res) => {
    const nom = req.body.nom;
    const cognoms = req.body.cognoms;
    const email = req.body.email;
    const candidat = {
        nom: nom,
        cognoms: cognoms,
        email: email
    }
    baseDadesCandidats.push(candidat);
    console.log(baseDadesCandidats);
    res.redirect("/");
});


app.get('/about', (req, res) => {
    res.render("about");
});


app.get('/list-current-candidates', (req, res) => {
    res.render("list-candidates", 
    { 
        candidats: baseDadesCandidats 
    });
});



app.listen(3000);