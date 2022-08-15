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
// dummy lat/lon data
const latData = '39.7392';
const lonData = '-104.9847';

//fetch data requests
let respData = {
    apiKey: '', //api key
    fetchData: function(city) {
    //send api request
        fetch(//create key pair for fetch url
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${this.apiKey}`) //api URL as template literal)
        //receive response in json
        .then((response) => response.json())
        //receive data, create data object
        .then((data) => this.writeData(data)); 
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
        const currentDate = moment().format("(DD/MM/YYYY)");
        //const cityLat = data.city.coord.lat;
        //const cityLon = data.city.coord.lon;
        //cityLat.push(latData);
        //cityLon.push(lonData);
        //change text of html elements
        cityDateEl.textContent = `${cityName} ${currentDate}`
        cityTempEl.textContent = `Temp: ${cityTemp}°F`;
        cityWindEl.textContent = `Wind: ${cityWind} MPH`;
        cityHumidEl.textContent = `Humidity: ${cityHumid}%`;
        //pull icon code, create img, append to date, add icon id to src url
        const cityIconEl = document.createElement('img');
        cityDateEl.appendChild(cityIconEl);
        cityIconEl.id = 'cityIcon'
        document.querySelector('#cityIcon').src = `http://openweathermap.org/img/wn/${cityIconId}.png`;
        //console.log(cityName, cityTemp, cityWind, cityHumid)
    },        
};
// fetch data request for uv index
let respDataUv = {
    apiKey2: '', //api key 2
    fetchData3: function() {  
        //send api request for api 3.0
        fetch(//create key pair for fetch url
        `https://api.openweathermap.org/data/3.0/onecall?lat=${latData}&lon=${lonData}&appid=${this.apiKey2}`) //api URL as template literal)
        //receive response in json
        .then((response) => response.json())
        //receive data, create data 2 object
        .then((data) => this.writeUv(data))
    },
    writeUv: function(data) {
        console.log(data);console.log(data);
        //assign data to variables
        const cityUv = data.current.uvi;
        //change text of html elements
        cityUvEl.textContent = `UV Index: ${cityUv}`;
    },
};
//create listener for search button and run fetch(s)
searchBtnEl.addEventListener('click', function(event) {
    //prevent event bubbling
    event.preventDefault();
    respData.fetchData(searchInputEl.value.trim());
    respDataUv.fetchData3();
});