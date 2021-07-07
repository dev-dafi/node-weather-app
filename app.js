require("dotenv").config();
// const request = require("postman-request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");




// geocode does not have a direct return value!
geocode("Berlin", (error, data) => {
    // access to results, after geocoding process is complete
    console.log("Error:", error);
    console.log("Data:", data);

})



//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(52.51667, 13.38333, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })