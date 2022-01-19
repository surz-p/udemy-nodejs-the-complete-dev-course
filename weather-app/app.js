// core node modules

// npm modules

// custom modules
const { info, warn, log } = require('./text-formatter');
const Geo = require('./utils/geoCode');
const Weather = require('./utils/forecast');

Geo.getGeoCode('New York', (error, data) => {
    if (error) {
        console.log(warn(error));
    } else {
        console.log(info(JSON.stringify(data)));
    }
});

Weather.getForecast(-73.9866, 40.7306, (error, data) => {
    if (error) {
        console.log(warn(error));
    } else {
        console.log(info(data));
    }
});
