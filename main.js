const apiKey = `5fe9f0e53c17be398dddaf73f4add857`;
const searchBtn = document.getElementById('search-btn');

const searchTemperature = () =>{
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));

}
searchBtn.addEventListener('click', searchTemperature);

const displayTemperature = (details) =>{
    console.log(details);
}