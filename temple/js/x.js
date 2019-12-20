const requestURL = 'https://github.com/remo1209/repo/blob/master/temples.json';
fetch(requestURL)
  .then(function (response) {return response.json();})
  .then(function (jsonObject) {console.table(jsonObject); // temporary checking for valid response and data parsing


    const temples = jsonObject['name'];
    for (let i = 0; i < temples.length; i++ ) {
        let temple = document.createElement("div");
        let list = document.createElement('ul');
        ul.textContent = temples[i].closures;
        temple.appendChild(list);
        document.querySelector('div.temple').appendChild(temple);
    

    }
});




