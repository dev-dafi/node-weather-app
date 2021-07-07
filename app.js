// REQUIREMENTS

require("dotenv").config();
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");


//VARIABLES

const location = process.argv[2];

if (!location) {
    console.log("You have to provide a location via command line argument!");
} else {
    // gecode provides lat/lon to work with forecast
    geocode(location, (error, data) => {

        if (error) {
            return console.log(error); //stops function execution, after log error to console
        }

        // data = success output from geocode. 
        // data is defined as an object -> properties are accessable 
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            console.log(data.location);
            console.log(forecastData);
        })
    })
}



