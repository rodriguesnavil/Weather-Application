const request = require('request');


//go to forecast.io sign in with your account and get the secret key
var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.forecast.io/forecast/b1741bed3aa1a5533e0afd16173d7921/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io server.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
