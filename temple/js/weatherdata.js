{const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3173914&APPID=f69138eabaf7b974bb7452d338551399&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherObject) => {
    console.log(weatherObject);
    document.getElementById('current').textContent = weatherObject.weather[0].description;
    document.getElementById('hightemp').textContent = Math.round(weatherObject.main.temp) + "° F";
    document.getElementById('humidity').textContent = weatherObject.main.humidity + "%";
    document.getElementById('windspeed').textContent = Math.round(weatherObject.wind.speed)+ " mph";
var hightemp = weatherObject.main.temp;
var windspeed = weatherObject.wind.speed;
if (hightemp > 50 && windspeed > 3)    {
  document.getElementById("windchill").innerHTML = "N/A";
} else {
  var windChill = 35.74 + (0.6215 * hightemp) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * hightemp * Math.pow(windspeed, 0.16));
  document.getElementById("windchill").innerHTML = Math.round(windChill) + "° F";
}    
});}


{const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=2128295&units=imperial&APPID=0b25c1f6d23d52987a6d10f8c21a31e6';
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherObject) => {
    console.log(weatherObject);
    document.getElementById('current2').textContent = weatherObject.weather[0].description;
    document.getElementById('hightemp2').textContent = Math.round(weatherObject.main.temp) + "° F";
    document.getElementById('humidity2').textContent = weatherObject.main.humidity + "%";
    document.getElementById('windspeed2').textContent = Math.round(weatherObject.wind.speed)+ " mph";
var hightemp2 = weatherObject.main.temp;
var windspeed2 = weatherObject.wind.speed;
if (hightemp2 > 50 && windspeed2 > 3)    {
  document.getElementById("windchill2").innerHTML = "N/A";
} else {
  var windChill = 35.74 + (0.6215 * hightemp2) - (35.75 * Math.pow(windspeed2, 0.16)) + (0.4275 * hightemp2 * Math.pow(windspeed2, 0.16));
  document.getElementById("windchill2").innerHTML = Math.round(windChill) + "° F";
}    
});}

{const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=2158177&units=imperial&APPID=0b25c1f6d23d52987a6d10f8c21a31e6';
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherObject) => {
    console.log(weatherObject);
    document.getElementById('current3').textContent = weatherObject.weather[0].description;
    document.getElementById('hightemp3').textContent = Math.round(weatherObject.main.temp) + "° F";
    document.getElementById('humidity3').textContent = weatherObject.main.humidity + "%";
    document.getElementById('windspeed3').textContent = Math.round(weatherObject.wind.speed)+ " mph";
var hightemp3 = weatherObject.main.temp;
var windspeed3 = weatherObject.wind.speed;
if (hightemp3 > 50 && windspeed3 > 3)    {
  document.getElementById("windchill3").innerHTML = "N/A";
} else {
  var windChill = 35.74 + (0.6215 * hightemp3) - (35.75 * Math.pow(windspeed3, 0.16)) + (0.4275 * hightemp3 * Math.pow(windspeed3, 0.16));
  document.getElementById("windchill3").innerHTML = Math.round(windChill) + "° F";
}    
});}

{const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=7285212&units=imperial&APPID=0b25c1f6d23d52987a6d10f8c21a31e6';
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherObject) => {
    console.log(weatherObject);
    document.getElementById('current4').textContent = weatherObject.weather[0].description;
    document.getElementById('hightemp4').textContent = Math.round(weatherObject.main.temp) + "° F";
    document.getElementById('humidity4').textContent = weatherObject.main.humidity + "%";
    document.getElementById('windspeed4').textContent = Math.round(weatherObject.wind.speed)+ " mph";
var hightemp4 = weatherObject.main.temp;
var windspeed4 = weatherObject.wind.speed;
if (hightemp4 > 50 && windspeed4 > 3)    {
  document.getElementById("windchill4").innerHTML = "N/A";
} else {
  var windChill = 35.74 + (0.6215 * hightemp4) - (35.75 * Math.pow(windspeed4, 0.16)) + (0.4275 * hightemp4 * Math.pow(windspeed4, 0.16));
  document.getElementById("windchill4").innerHTML = Math.round(windChill) + "° F";
}    
});}