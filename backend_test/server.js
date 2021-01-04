const express = require('express');
const app = express();
const bp = require("body-parser");

app.use(bp.urlencoded({ extended: true }));

app.get('/match', (request, response) => {
  console.log("match");

	//console.log(result.results);
	//result.results.map(item => (console.log(item)));
	//console.log(result.json());
  // Vérification des données entré

  // valeurs retourné

  // la variable cheminImage est un chemin relatif vers l'image
  response.json({
    "count": 4,
    "next": null,
    "previous": null,
    "results": [
        {
            "teamAuec": 2,
            "teamAdvAuec": null,
            "teamAdvName": "LDT",
            "tournamentName": "Air-Eisti 24h LoL 5v5",
            "url": "https://www.toornament.com/en_US/tournaments/4087012138431234048/stages/4087014626253553664/",
            "scoreAuec": 1,
            "scoreAdv": 0,
            "date": "2020-12-05T14:29:00+0000"
        },
        {
            "teamAuec": 2,
            "teamAdvAuec": null,
            "teamAdvName": "Crabe-Y Tech",
            "tournamentName": "Air-Eisti 24h LoL 5v5",
            "url": "https://www.toornament.com/en_US/tournaments/4087012138431234048/stages/4087014626253553664/",
            "scoreAuec": 1,
            "scoreAdv": 2,
            "date": "2020-12-05T14:29:00+0000"
        },
        {
            "teamAuec": 2,
            "teamAdvAuec": null,
            "teamAdvName": "TropTropTrop D4 THX Azir807",
            "tournamentName": "Air-Eisti 24h LoL 5v5",
            "url": "https://www.toornament.com/en_US/tournaments/4087012138431234048/stages/4087014626253553664/",
            "scoreAuec": 1,
            "scoreAdv": 0,
            "date": "2020-12-05T14:29:00+0000"
        },
        {
            "teamAuec": 2,
            "teamAdvAuec": null,
            "teamAdvName": "OH YOOOOOOOW",
            "tournamentName": "Air-Eisti 24h LoL 5v5",
            "url": "https://www.toornament.com/en_US/tournaments/4087012138431234048/stages/4087014626253553664/",
            "scoreAuec": 1,
            "scoreAdv": 0,
            "date": "2020-12-05T14:29:00+0000"
        }
    ]
})
})

app.get('/team', (request, response) => {
  console.log("team");

	//console.log(result.results);
	//result.results.map(item => (console.log(item)));
	//console.log(result.json());
  // Vérification des données entré

  // valeurs retourné

  // la variable cheminImage est un chemin relatif vers l'image
  response.json(
   {
   "count":2,
   "next":null,
   "previous":null,
   "results":[
      {
         "id":1,
         "teamName":"solo",
         "players_auec":[
            {
               "id":1,
               "nickname":"Phoebe",
               "dateJoined":"2020-11-10T00:00:00+0000",
               "birthday":"2020-11-01T00:00:00+0000",
               "game":"Honkai Impact 3rd",
               "facebook":"",
               "twitter":"",
               "instagram":"",
               "twitch":"imPho3",
               "youtube":"",
               "discord":"",
               "payload":"{\"test\":\"1\"}"
            }
         ]
      },
      {
         "id":2,
         "teamName":"Intra-veineuse",
         "players_auec":[
            {
               "id":2,
               "nickname":"Vistä",
               "dateJoined":"2019-09-15T22:13:27+0000",
               "birthday":null,
               "game":"League of Legends",
               "facebook":null,
               "twitter":"@Vistalol",
               "instagram":null,
               "twitch":null,
               "youtube":null,
               "discord":"Vistä#5608",
               "payload":""
            },
            {
               "id":3,
               "nickname":"LiMouX",
               "dateJoined":"2019-09-15T22:13:43+0000",
               "birthday":null,
               "game":"League of Legends",
               "facebook":null,
               "twitter":"@DerrDamien",
               "instagram":null,
               "twitch":null,
               "youtube":null,
               "discord":null,
               "payload":""
            },
            {
               "id":4,
               "nickname":"Mephalasta",
               "dateJoined":"2019-09-15T22:22:17+0000",
               "birthday":null,
               "game":null,
               "facebook":null,
               "twitter":null,
               "instagram":null,
               "twitch":null,
               "youtube":null,
               "discord":null,
               "payload":""
            },
            {
               "id":5,
               "nickname":"Youne",
               "dateJoined":"2019-09-15T22:22:50+0000",
               "birthday":null,
               "game":"League of Legends",
               "facebook":null,
               "twitter":null,
               "instagram":null,
               "twitch":null,
               "youtube":null,
               "discord":null,
               "payload":""
            },
            {
               "id":6,
               "nickname":"SacreRouge",
               "dateJoined":"2019-09-15T22:23:08+0000",
               "birthday":null,
               "game":"League of Legends",
               "facebook":null,
               "twitter":null,
               "instagram":null,
               "twitch":null,
               "youtube":null,
               "discord":null,
               "payload":""
            }
         ]
      }
   ]
})
})

var server = app.listen(3018, () => {
	console.log('ecoute sur 3018');
});
