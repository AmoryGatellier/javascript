let ville = '';
let pays = '';

let button = document.querySelector('#cg');
button.addEventListener('click', () => {
    ville = prompt('Choisissez une ville :');
    pays = prompt('Choisissez un pays');
    Temperature(ville);
});

function Temperature(ville) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&country=${pays}'&appid=8d1ea57f5c7bb682b127c50f23b95b2b&units=metric`;
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                let ville = reponse.name;
                let temperature = Math.round(reponse.main.temp * 2) * 0.5;
                document.querySelector('#ville').textContent = ville;
                document.querySelector('#temperature_label').textContent = temperature;
            } else {
                alert('Un problème est intervenu, impossible de donner la méteo');
            }
        }
    }
}