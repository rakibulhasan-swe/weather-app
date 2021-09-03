const apiKey = `5fe9f0e53c17be398dddaf73f4add857`;
const searchBtn = document.getElementById('search-btn');
const imgIcon = document.getElementById('weather-icon');
const inputValue = document.getElementById('city-name');

const searchTemperature = () =>{
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));

}
searchBtn.addEventListener('click', searchTemperature);

const setSearchedValue = (id, city) =>{
    document.getElementById(id).innerText = city;
}

const displayTemperature = (details) =>{
    inputValue.value = '';
    // set dynamic icon
    const iconUrl = ` http://openweathermap.org/img/wn/${details.weather[0].icon}@2x.png`;
    imgIcon.setAttribute('src', iconUrl);

    setSearchedValue('city', details.name);
    setSearchedValue('temperature', details.main.temp);
    setSearchedValue('temp-min', details.main.temp_min);
    setSearchedValue('temp-min', details.main.temp_max);
    setSearchedValue('condition', details.weather[0].main);
    
}