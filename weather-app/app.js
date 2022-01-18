// API KEY - Weatherstack
// 688b742c07634c35077e590aefaa25ad

// URL
// http://api.weatherstack.com/current
//     ? access_key = YOUR_ACCESS_KEY
//     & query = New York

// API KEY - Mapbox
// pk.eyJ1IjoiYW5vbnltaWNreW1vdXNlIiwiYSI6ImNreWsyMjc2NjF6NWYzM3FocW10OHM1dHkifQ.PfoGJR36YuV7Rgv0iPFlEQ

// URL
// https://api.mapbox.com/geocoding/v5/mapbox.places/
//     Los%20Angeles.json
//     ?access_token=YOUR_ACCESS_KEY

// core node module

// npm modules
const postmanRequest = require('postman-request');

// custom modules
const { info, warn, log } = require('./text-formatter');

const url = "http://api.weatherstack.com/current"
    + "?access_key=688b742c07634c35077e590aefaa25ad&query=Hyderabad";

postmanRequest({url: url, json: true}, (error, response) => {
    if(error) {
        console.log(warn('Request to fetch weather data failed!'));
    } else {
        response.body.current.weather_descriptions.forEach(desc => console.log(info(desc) + '.'));
        console.log(log('It is currently ')
            + info(response.body.current.temperature)
            + log(' degrees outside.'));
        console.log(log('However, it feels like ')
            + info(response.body.current.feelslike)
            + log(' degrees outside.'));
    }
});

const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?"
    + "access_token=pk.eyJ1IjoiYW5vbnltaWNreW1vdXNlIiwiYSI6ImNreWsyMjc2NjF6NWYzM3FocW10OHM1dHkifQ"
    + ".PfoGJR36YuV7Rgv0iPFlEQ&limit=1";

// had to use strictSSL: false to avoid crashing into an error!
postmanRequest({url: geoUrl, json: true, strictSSL: false}, (error, response) => {
    if(error) {
        console.log(warn('Request to fetch geo-location failed!'))
    } else {
        const coordinates = response.body.features[0].center;
        console.log(log('Longitude is: ') + info(coordinates[0]));
        console.log(log('Latitude is: ') + info(coordinates[1]));
    }
});
