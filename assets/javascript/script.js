//select elements for current city data
const cityDateEl = document.querySelector('#cityDate');
const cityTempEl = document.querySelector('#cityTemp');
const cityWindEl = document.querySelector('#cityWind');
const cityHumid = document.querySelector('#cityHumid');
const cityUvEl = document.querySelector('#cityUv');
//select elements for 5-day forecast cards
const day1El = document.querySelector('#day1');
const day2El = document.querySelector('#day2');
const day3El = document.querySelector('#day3');
const day4El = document.querySelector('#day4');
const day5El = document.querySelector('#day5');
//select input, search button, andsearch history element for saved cities
const cityHistEl = document.querySelector('#cityHist');
const searchInputEl = document.querySelector('#searchBtn');
const searchBtnEl= document.querySelector('#cityHist');

//fetch data request
let searchCity = '';
//let dataResp;
const fetchData = function() {
    //create const for fetch url
    const apiKey = ''; //api key
    const searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}`; //api URL as template literal
    //send api request
    fetch(searchUrl)
    //receive response in json
    .then((response)=> response.json())
    //receive data, create data object
    .then((data) => console.log(data));
};
//use data object to populate html elements
const writeData = function(data) {
    //assign data to variables
    const cityName = fetchData.data.name;
    const cityTemp = fetchData.data.main.temp;
    const cityWind = fetchData.data.wind.speed;
    const cityHumid = fetchData.data.main.humidity;
    const cityIcon = fetchData.data.weather.icon
    //const cityUv = data.
    //change text of html elements
    cityDateEl.textContent() = `${cityName} (##/##/####) ${cityIcon}`
    cityTempEl.textContent() = `Temp: ${cityTemp}`;
    cityWindEl.textContent() = `Wind: ${cityWind}`;
    cityTempEl.textContent() = `Humidity: ${cityHumid}`;

};




fetchData();