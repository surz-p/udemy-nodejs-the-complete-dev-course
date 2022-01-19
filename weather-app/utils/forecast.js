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

    postmanRequest({url: weatherUrl, json: true}, (error, response) => {
        if (error) {
            callback('Request to fetch weather data failed!');
        } else if (response.body.error) {
            const errorCode = response.body.error.code;
            const errorInfo = response.body.error.info;
            callback(`Error while requesting data.\n`
                + `Code: ${errorCode}\n`
                + `Info: ${errorInfo}`);

        } else {
            const description = response.body.current.weather_descriptions[0];
            const currentTemp = response.body.current.temperature;
            const feelsLikeTemp = response.body.current.feelslike;
            callback(undefined, `${description}.\n`
                + `It is currently ${currentTemp} degrees outside.\n`
                + `However, it would feel like ${feelsLikeTemp} degrees.`);
        }
    });
};

module.exports = {
    getForecast: getForecast
}
