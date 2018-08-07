
const express = require('express');
const bodyParser = require('body-parser');
const APIKEY = require('./api.js');
const http = require('http');

var {mongoose} = require('./db/mongoose');
var {Data} = require('./models/data');


const server = express();
server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(bodyParser.json());

server.post('/DataTalk', (req, res) => {
    
    //console.log(req.body.queryResult.parameters);

    //get web_id parameter
    const parameter = req.body.queryResult.parameters
    const web_id = (parameter["Web-ID"]);
    console.log(web_id);
      //get date parameters
      const startDate = parameter["date-period"]["startDate"];
      const endDate = parameter["date-period"]["endDate"];
      console.log(startDate);
      console.log(endDate);
      
    //   server.get('/data', (req, res) => {
    //     Data.find().limit(5).then((Session_Summary) => {
    //         res.send({Session_Summary});
    //         console.log('results for from collections');
    //     }, (err) => {
    //         console.log('unable to fetch data');
    //     })});

 });

    // server.get('/data', (req, res) => {
    // Data.find().limit(5).then((Session_Summary) => {
    //     res.send({Session_Summary});
    //     console.log('results for from collections');
    // }, (err) => {
    //     console.log('unable to fetch data');
    // })});

server.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
});



