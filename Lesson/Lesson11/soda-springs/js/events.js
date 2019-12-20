const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json(); })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Soda Springs") {
                let town = document.createElement('section');
                let event1 = document.createElement('p');
                let event2 = document.createElement('p');
                let event3 = document.createElement('p');               
                event1.textContent = towns[i].events[0];
                event2.textContent = towns[i].events[1];
                event3.textContent = towns[i].events[2];               
                town.appendChild(event1);
                town.appendChild(event2);
                town.appendChild(event3);
                
                document.querySelector('div.event').appendChild(town);
            }
        }
    });