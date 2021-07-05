require("dotenv").config();
const request = require("postman-request");
const geocode = require("./utils/geocode");

// const weatherURL = "http://api.weatherstack.com/current?access_key=" + process.env.WEATHERAPIKEY + "&query=37.8267,-122.4233"

// request({ uri: weatherURL, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to weather service!");
//     } else if (response.body.error) {
//         console.log("Unable to find location!");
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + 
//         " celsius out. It feels like " + response.body.current.feelslike + 
//         " celsius out.");
//     }    
// })

geocode("Berlin", (error, data) => {
    // access to results, after geocoding process is complete
    console.log("Error:", error);
    console.log("Data:", data);

})