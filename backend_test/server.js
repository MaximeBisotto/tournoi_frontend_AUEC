const express = require('express');
const app = express();
const bp = require("body-parser");

app.use(bp.urlencoded({ extended: true }));

/**
 * Retourne la liste des équipes avec une image
 * Params: rien
 * Methode: GET
 * Return: JSON
 **/
app.get('/team', (request, response) => {
  console.log("team");
  // Vérification des données entré

  // valeurs retourné

  // la variable cheminImage est un chemin relatif vers l'image
  response.json([
    {
      nomEquipe: "test1",
      cheminImage: "/dev/null;)"
    },
    {
      nomEquipe: "test2",
      cheminImage: "chez/le/photographe"
    }
  ])
})

var server = app.listen(3018, () => {
	console.log('ecoute sur 3018');
});
