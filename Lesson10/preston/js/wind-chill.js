const currentAPI = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=f69138eabaf7b974bb7452d338551399&units=imperial';
fetch(currentAPI).then(function (response){
    return response.json(); })
  .then(function (jsonObject)  {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    document.getElementById("condition").innerHTML = jsonObject['weather'][0]['main'];
    document.getElementById("tempF").innerHTML = jsonObject['main']['temp'];
    document.getElementById("humidity").innerHTML = jsonObject['main']['humidity'] + "%";
    document.getElementById("windSpeed").innerHTML = jsonObject['wind']['speed'];    
    var temperature = parseFloat(jsonObject['wind']['speed']);
    var windSpeed = parseFloat(jsonObject['wind']['speed']);
    if (temperature > 50 || windSpeed < 3)    {
        document.getElementById("wChill").innerHTML = "N/A";
    } else {
        var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        document.getElementById("wChill").innerHTML = windChill.toFixed(2) ;
    }    
  });

  const forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=f69138eabaf7b974bb7452d338551399&units=imperial';
  fetch(forecastAPI)
  .then((response) => response.json())
  .then((forecastObject) => {
    console.log(forecastObject);

// plusOne variable to increase the element ID each time through the for loop to place data in the next element.    
plusOne = 1;

    for (let i = 0; i < forecastObject.list.length; i++) {

    if (forecastObject.list[i].dt_txt.includes("18:00:00")) {

        let td = forecastObject.list[i].dt;
        let date = new Date(td * 1000);
        let weekDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        let dayOfWeek = weekDays[date.getDay()];

        document.getElementById('day' + plusOne).textContent = dayOfWeek; 
        document.getElementById('forecast' + plusOne).textContent = Math.round(forecastObject.list[i].main.temp_max) + "° F";
        document.getElementById("icon" + plusOne).setAttribute('src', 'https://openweathermap.org/img/w/' + forecastObject.list[i].weather[0].icon + '.png'); 
        document.getElementById('icon' + plusOne).setAttribute('alt', forecastObject.list[i].weather[0].description);
        
        plusOne++;
    }
}

  });



  /*fetch(forecastAPI)
  .then(function (response) {
    return response.json(); })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
      let weatherForecast = JSON.parse(forecastAPI.responseText);
      let tempforecast = [];
      let tempicon = [];
      let desc = [];
      let day = 1;
      weatherForecast.list.forEach(hour => {
          if (hour.dt_txt.includes('18:00:00')) {
              tempforecast[day] = hour.main.temp;
              tempicon[day] = "http://openweathermap.org/img/w/" + hour.weather[0].icon + ".png";
              desc[day] = hour.weather[0].description;
              day++;
          }
      });
      let weekday = new Date();
      let names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      for (let i = 1; i <= 5; i++) {
          document.getElementById('forecast' + i).innerHTML = tempforecast[i].toFixed() + "&deg; F";
          document.getElementById('icon' + i).setAttribute('src', tempicon[i]);
          document.getElementById('icon' + i).setAttribute('alt', desc[i]);
          document.getElementById('weekday' + i).innerHTML = names[(weekday.getDay() + i) % 7]; 
        }
    
  });*/