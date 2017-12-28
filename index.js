

const request = require('request');
const argv = require('yargs').argv;

let apiKey = '9547cda90ef38874ac00a9ccce26a536';
let city = argv.c || 'West Des Moines,US';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
	let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
	console.log(message);
  }
});


