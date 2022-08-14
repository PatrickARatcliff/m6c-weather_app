//select elements for current city data
const  cityDateEl = document.querySelector('#cityDate');
const cityTempEl = document.querySelector('#cityTemp');
const cityWindEl = document.querySelector('#cityWind');
const cityHumidEl = document.querySelector('#cityHumid');
const cityUvEl = document.querySelector('#cityUv');
//select elements for 5-day forecast cards
const day1El = document.querySelector('#day1');
const day2El = document.querySelector('#day2');
const day3El = document.querySelector('#day3');
const day4El = document.querySelector('#day4');
const day5El = document.querySelector('#day5');
//select input, search button, andsearch history element for saved cities
const cityHistEl = document.querySelector('#cityHist');
const searchInputEl = document.querySelector('#searchInput');
const searchBtnEl= document.querySelector('#searchBtn');

//fetch data request

//let dataResp;
let respData = {
    apiKey: '', //api key
    fetchData: function(city) {
    //send api request
        fetch(//create key pair for fetch url
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`) //api URL as template literal)
        //receive response in json
        .then((response) => response.json())
        //receive data, create data object
        .then((data) => this.writeData(data)
        );
        
    },
    //use data object to populate html elements
    writeData: function(data) {
        console.log(data);
        //assign data to variables
        const cityName = data.name;
        const cityTemp = data.main.temp;
        const cityWind = data.wind.speed;
        const cityHumid = data.main.humidity;
        const cityIconId = data.weather[0].icon;

        //const cityUv = data.
        //change text of html elements
        cityDateEl.textContent = `${cityName} (##/##/####)`
        cityTempEl.textContent = `Temp: ${cityTemp}`;
        cityWindEl.textContent = `Wind: ${cityWind} mph`;
        cityHumidEl.textContent = `Humidity: ${cityHumid}%`;
        
        const cityIconEl = document.createElement('img');
        cityDateEl.appendChild(cityIconEl);
        cityIconEl.id = 'cityIcon'
        document.querySelector('#cityIcon').src = `http://openweathermap.org/img/wn/${cityIconId}.png`;
        //console.log(cityName, cityTemp, cityWind, cityHumid)
    },

};

searchBtnEl.addEventListener('click', function(event) {
    event.preventDefault();
    respData.fetchData(searchInputEl.value);
})