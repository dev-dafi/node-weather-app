require("dotenv").config();
const request = require("postman-request");

const weatherURL = "http://api.weatherstack.com/current?access_key=" + process.env.WEATHERAPIKEY + "&query=37.8267,-122.4233"
const geoCodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=" + process.env.GEOCODEAPIKEY + "&limit=1"

request({ uri: weatherURL, json: true }, (error, response) => {
    if (error) {
        console.log("Error:" + error);
    } else {
        console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + 
        " celsius out. It feels like " + response.body.current.feelslike + 
        " celsius out.");

    }
    
})

request({uri: geoCodeURL, json: true}, (error, response)=>{
    if(error){
        console.log("Error: " + error);
        
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log("Latitude: " + latitude +" Longitude: " + longitude);
    }
});
