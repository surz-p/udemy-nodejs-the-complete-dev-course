// API KEY
// 688b742c07634c35077e590aefaa25ad

// URL
// http://api.weatherstack.com/current
//     ? access_key = YOUR_ACCESS_KEY
//     & query = New York

// core node module

// npm modules
const postmanRequest = require('postman-request');

// custom modules
const textFormat = require('./text-formatter');

const url = "http://api.weatherstack.com/current"
    + "?access_key=688b742c07634c35077e590aefaa25ad&query=Hyderabad";

postmanRequest({url: url, json: true}, (error, response) => {
    console.log('It is currently '
        + textFormat.responseParameters(response.body.current.temperature)
        + ' degrees outside.');
    console.log('However, it feels like '
        + textFormat.responseParameters(response.body.current.feelslike)
        + ' degrees outside.');
});
