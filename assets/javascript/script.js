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
//create const for fetch url
const apiKey = ''; //api key
const searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}`; //api URL as template literal
//fetch data request
const fetchData = function() {
    //send api request
    fetch(searchUrl)
    //receive response in json
    .then((response)=> response.json())
    //receive data, create data object
    .then((data) => console.log(data));
};
//use data object to populate html elements
const writeData = function () {
    
};




fetchData();