const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=f69138eabaf7b974bb7452d338551399&units=imperial';
fetch(apiURL)
  .then(function (response)  {
    return response.json();})
  .then(function (jsonObject){
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const main = jsonObject['main']
    document.getElementById("current-temp").innerHTML = main['temp']
    const weather = jsonObject['weather']
    const imagesrc = 'https://openweathermap.org/img/w/' + weather[0].icon + '.png';
    const desc = weather[0].description;
    document.getElementById("imagesrc").innerHTML = imagesrc;
    document.getElementById("icon").alt = desc;
    document.getElementById("icon").src = imagesrc;
  });
