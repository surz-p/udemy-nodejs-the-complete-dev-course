// API KEY
// 688b742c07634c35077e590aefaa25ad

// URL
// http://api.weatherstack.com/current
//     ? access_key = YOUR_ACCESS_KEY
//     & query = New York

// core node module

// npm modules
const postmanRequest = require('postman-request');

const url = "http://api.weatherstack.com/current?access_key=688b742c07634c35077e590aefaa25ad&query=Chennai"

postmanRequest({url: url, json: true}, (error, response) => {
    // const data = JSON.parse(response.body);
    console.log(response.body.current);
});