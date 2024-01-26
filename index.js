const express = require('express');
// importer express
const app = express();
//créer une app en appelant le module express
const port = 5005;

//creer les routes
app.get("/", (req, res) => {
    res.send("Welcome on Express :)");
})

const welcomeName = (req, res) => {
    res.send(`Welcome ${req.params.name}`)
}

app.get("/users/:name", welcomeName)

const cocktails = [
  {
    id: 1,
    name: "Margarita",
  },
  {
    id: 2,
    name: "Mojito",
  },
  {
    id: 3,
    name: "Cuba Libre",
  },
];

const getCocktails = (req, res) => {
  res.status(200).json(cocktails);
};

app.get("/api/cocktails", getCocktails);

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app.get("/api/movies", (req,res) => {
    res.status(200).json(movies);
})

app.get("/api/movies/:id", (req,res) => {
    const movie = movies.find((movie) => movie.id === parseInt(req.params.id));
    if(movie){
        res.status(200).json(movie);
    }
    else {
        res.status(404).send("error not found")
    }
})


//ecouter les connexion entrante avec la méthode listen d'express
app.listen(port, () => {
    console.info(`Server is listening on port ${port}`);
})
.on("error", (err)=> {
 console.error("Error:",err.message);
});

//installer nodemon : npm i nodemon --save-dev
// "main": "index.js",
// "scripts": {
//   "start": "node index.js",
//   "dev": "nodemon index.js",
//   "test": "echo \"Error: no test specified\" && exit 1"
// },

//npm run dev : lancer nodemon

// routes : Un point d'entrée est un chemin d'URL (/, /about, contact, etc.) 
// associé une méthode de requête HTTP spécifique (GET, POST, etc.).

//app.method(PATH, HANDLER)
//app est une instance d'Express
//METHOD est une méthode de requête HTTp (GET,POST,PUT, DELETE)
//PATH est le chemin vers le serveur 
//HANDLER est la fonction exécuter lorsque le chemin est reconnu

// route get : app.GET("/", HANDLER)
// app.GET("/", (req, res) => {
    //res.send("welcome to Express :)");
//});
//req : requete est un objet contenant les informations du client vers le serveur 
//res : réponse est un objet contenant les informations envoyé du serveur vers le client 
//l'objet response dispose de méthodes permettant d'envoyer : un code statut, du contenu, etc