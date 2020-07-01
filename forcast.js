var unirest = require('unirest');
var express = require('express');
var app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));
app.get('/', function(req, res){
unirest.get("https://community-open-weather-map.p.rapidapi.com/forecast")
       .header("X-RapidAPI-Key", "9662d22838msh2725a314207f621p17608djsn065e2cb2f446")
       .header("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com")
  .query({
        'appid': 'default-application_3908689',
        'q': 'Ampton',
        'units': 'metric'
  })
  .end(function (result) {
        res.render('index', {data:result.body});
  });
})
app.listen(8081, function(){
  console.log('Server running at https://127.0.0.1:8081/');
})