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

forecast(52.51667, 13.38333, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })