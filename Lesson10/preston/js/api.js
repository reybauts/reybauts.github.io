const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=f69138eabaf7b974bb7452d338551399&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherObject) => {
    console.log(weatherObject);
    document.getElementById('currently').textContent = weatherObject.weather[0].description;
    document.getElementById('tempF').textContent = Math.round(weatherObject.main.temp) + "° F";
    document.getElementById('humidity').textContent = weatherObject.main.humidity + "%";
    document.getElementById('windSpeed').textContent = Math.round(weatherObject.wind.speed)+ " mph";
var tempF = weatherObject.main.temp;
var windSpeed = weatherObject.wind.speed;
if (tempF > 50 && windSpeed < 3)    {
  document.getElementById("wChill").innerHTML = "N/A";
} else {
  var windChill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * tempF * Math.pow(windSpeed, 0.16));
  document.getElementById("wChill").innerHTML = Math.round(windChill) + "° F";
}    
});
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=f69138eabaf7b974bb7452d338551399&units=imperial";
fetch(forecastURL)
  .then((response) => response.json())
  .then((forecastObject) => {
    console.log(forecastObject);
    d = 1;
    for (let i = 0; i < forecastObject.list.length; i++) {
    if (forecastObject.list[i].dt_txt.includes("18:00:00")) {
        let td = forecastObject.list[i].dt;
        let date = new Date(td * 1000);
        let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let dayOfWeek = weekDays[date.getDay()];
        document.getElementById('day' + d).textContent = dayOfWeek;        
        document.getElementById('icon' + d).setAttribute('src', 'https://openweathermap.org/img/w/' + forecastObject.list[i].weather[0].icon + '.png'); 
        document.getElementById('icon' + d).setAttribute('alt', forecastObject.list[i].weather[0].description);
        document.getElementById('tempF' + d).textContent = Math.round(forecastObject.list[i].main.temp_max) + "° F";
        d++;
    }
}
  });
