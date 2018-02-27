var express = require("express");
var app = express();
var dataFile = require("./data/data.json");


app.set('port', 8080);

app.get('/', function(req, res){
    res.send("<h1>this is my express text</h1>");
});

app.get('/speakers', function(req, res){
    var info ="";
    dataFile.speakers.forEach(element => {
        info += `
            <h1>${element.title}</h1>
            <p>${element.summary}</p>
        `
    });

    res.send(`<h1>Beow are my speakers</h1>
        ${info}
    `);
});

app.get('/speakers/:speakerid', function(req, res){
    var info ="";

    var speaker = dataFile.speakers[req.params.speakerid];
    
    info += `
            <h1>${speaker.title}</h1>
            <p>${speaker.summary}</p>
        `

    res.send(`<h1>Beow are my speakers</h1>
        ${info}
    `);
});


var server= app.listen(app.get('port'), function(){
    console.log("The server is running on port "+ app.get('port'));
});