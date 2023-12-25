window.addEventListener('load', () => {
    getDefaultCityWeather();
});
// varsayilan, sayfa yuklendiginde gelen sehir istanbul olsun
const getDefaultCityWeather = () => {
    const defaultCity = 'Istanbul'; 
    getResult(defaultCity);
}


const key = 'aa775c4e30393b1b297f1b037e644b27';

const setQuery = (e) => {
    if(e.keyCode == '13')
    getResult(arama.value)
}

const getResult=(sehirName) =>{
    const query = `https://api.openweathermap.org/data/2.5/weather?q=${sehirName}&appid=${key}&units=metric&lang=tr`;
    fetch(query)
        .then(weather => {
            return weather.json();
        })
        .then(displayResult)
        .catch(error => {
            console.log("Hata oluştu:", error);
        });
}
const displayResult = (result)=> {
    console.log(result)
    let sehir=document.querySelector('.sehir')
    sehir.innerText=`${result.name},${result.sys.country}`

    let sicaklik=document.querySelector('.sicaklik')
    sicaklik.innerText=`${Math.round(result.main.temp)} derece`

    let havaDurum=document.querySelector('.havaDurum')
    havaDurum.innerText=result.weather[0].description

    let minmax=document.querySelector('.minmax')
    minmax.innerText=`Min: ${Math.round(result.main.temp_min)}°C - Max: ${Math.round(result.main.temp_max)}°C` 

    let hissedilen = document.querySelector('.hissedilen')
    hissedilen.innerText=`Hissedilen: ${Math.round(result.main.feels_like)}°C` 
}

const arama=document.getElementById('arama')
arama.addEventListener('keypress',setQuery)