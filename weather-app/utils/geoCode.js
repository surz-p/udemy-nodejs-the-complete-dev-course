/*
API KEY - Mapbox
pk.eyJ1IjoiYW5vbnltaWNreW1vdXNlIiwiYSI6ImNreWsyMjc2NjF6NWYzM3FocW10OHM1dHkifQ.PfoGJR36YuV7Rgv0iPFlEQ

URL
https://api.mapbox.com/geocoding/v5/mapbox.places/
    Los%20Angeles.json
    ?access_token=YOUR_ACCESS_KEY
*/

// npm modules
const postmanRequest = require('postman-request');

const getGeoCode = (address, callback) => {
    const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?`
    + `access_token=pk.eyJ1IjoiYW5vbnltaWNreW1vdXNlIiwiYSI6ImNreWsyMjc2NjF6NWYzM3FocW10OHM1dHkifQ`
    + `.PfoGJR36YuV7Rgv0iPFlEQ&limit=1`;

    // had to use strictSSL: false to avoid crashing into an error!
    postmanRequest({url: geoUrl, json: true, strictSSL: false}, (error, { body } = {}) => {
        if (error) {
            callback('Request to fetch geo-location failed!');
        } else if (body.features.length === 0) {
            callback('Invalid input parameters. Try again with a valid input.');
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                nameLocation: body.features[0].place_name
            });
        }
    });
};

module.exports = {
    getGeoCode: getGeoCode
};
