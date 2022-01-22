/*
API KEY - Weatherstack
688b742c07634c35077e590aefaa25ad

URL -
http://api.weatherstack.com/current
    ? access_key = YOUR_ACCESS_KEY
    & query = New York
*/

// npm modules
const postmanRequest = require('postman-request');

const getForecast = (longitude, latitude, callback) => {
    const weatherUrl = `http://api.weatherstack.com/current`
    + `?access_key=688b742c07634c35077e590aefaa25ad&query=${latitude},${longitude}`;

    postmanRequest({url: weatherUrl, json: true}, (error, { body } = {}) => {
        if (error) {
            callback('Request to fetch weather data failed!');
        } else if (body.error) {
            const { code, info } = body.error;
            callback(`Error while requesting data.\n`
                + `Code: ${code}\n`
                + `Info: ${info}`);

        } else {
            const description = body.current.weather_descriptions[0];
            const { temperature, feelslike } = body.current;
            callback(undefined, `${description}.\n`
                + `It is currently ${temperature} degrees outside.\n`
                + `However, it would feel like ${feelslike} degrees.`);
        }
    });
};

module.exports = {
    getForecast: getForecast
}
