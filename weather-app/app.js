// core node modules

// npm modules

// custom modules
const { info, warn, log } = require('./text-formatter');
const Geo = require('./utils/geoCode');
const Weather = require('./utils/forecast');

if(process.argv.length !== 3) {
    console.log(warn('Please use a valid input parameter to fetch weather data for.'));
    console.log(warn('E.g., node app.js Moscow'));
    console.log(warn('Try wrapping the parameter in quotes to search for spaced strings.'));
    console.log(warn('E.g., node app.js "Moscow Russia"'));
    return;
}

const searchParameter = process.argv[2];

Geo.getGeoCode(searchParameter, (error, { longitude, latitude, nameLocation } = {}) => {
    if (error) {
        return console.log(warn(error));
    }
    Weather.getForecast(longitude, latitude, (error, forecastResponse) => {
        if (error) {
            return console.log(warn(error));
        }
        console.log(log('For the location: ') + info(nameLocation)
            + log(', the forecast is as follows:'));
        console.log(info(forecastResponse));
    });
});
