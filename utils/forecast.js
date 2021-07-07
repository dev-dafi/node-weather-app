const request = require("postman-request");

forecast = (latitude, longitude, callback) => {
    const weatherURL = "http://api.weatherstack.com/current?access_key=" + process.env.WEATHERAPIKEY + "&query=" + latitude + ","+longitude;

request({ uri: weatherURL, json: true }, (error, response) => {
    if (error) {
        callback("Unable to connect to weather service!", undefined)
    } else if (response.body.error) {
        callback("Unable to find location!", undefined);
    } else {
        callback(undefined, {
            location: response.body.location.name,
            descritpion: response.body.current.weather_descriptions[0],
            temperature: response.body.current.temperature,
            feelsLike: response.body.current.feelslike
        })

        // console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + 
        // " celsius out. It feels like " + response.body.current.feelslike + 
        // " celsius out.");
    }    
})
}

module.exports = forecast;




