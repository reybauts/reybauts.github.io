const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL).then(function (response) {return response.json();})  
  .then(function (jsonObject) {
  console.table(jsonObject);   
  const towns = jsonObject['towns'];    

  for (let i = 0; i < towns.length; i++ ) {  
    if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
      let town = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let founded = document.createElement('p');
      let population = document.createElement('p');
      let rain = document.createElement('p');
      let townImage = document.createElement('img');       
      h2.textContent = towns[i].name;
      h3.textContent = towns[i].motto;
      founded.textContent = "Year Founded: " + towns[i].yearFounded;
      population.textContent = "Population: " + towns[i].currentPopulation;
      rain.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
      townImage.setAttribute('src', "images/" + towns[i].photo);
      townImage.setAttribute('alt', "images/" + towns[i].name);     
      town.appendChild(h2);
      town.appendChild(h3);
      
      town.appendChild(founded);
      town.appendChild(population);
      town.appendChild(rain);
      town.appendChild(townImage);
           
      document.querySelector('div.towns').appendChild(town);
    }}
});