const request = require("postman-request");

const geocode = (address, callback) => {
    const URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=" + process.env.GEOCODEAPIKEY + "&limit=1"
    request({url: URL, json: true}, (error, response) => {
        if(error) {
            // callback passes error to caller => geocode. 
            // 1. argument (error): string, 2. argument (data) undefined
            // caller defines what to do with error message!
            callback("Unable to connect to location services", undefined);
        } else if (response.body.features.length === 0) {
            callback("Unable to find location, please try again with different search term.", undefined);
        } else {
            // error = undefined
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;