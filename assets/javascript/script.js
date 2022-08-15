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
const latData = '';
const lonData = '';

//fetch data requests
let respData = {
    apiKey: '', //api key
    fetchData: function(city) {
    //send api request
        fetch(
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
        cityDateEl.textContent = `${cityName} ${currentDate}`;
        cityDateEl.id = 'cityDateEl';
        cityTempEl.textContent = `Temp: ${cityTemp}°F`;
        cityWindEl.textContent = `Wind: ${cityWind} MPH`;
        cityHumidEl.textContent = `Humidity: ${cityHumid}%`;
        //pull icon code, create img, append to date, add icon id to src url
        const cityIconEl = document.createElement('img');
        cityDateEl.appendChild(cityIconEl);
        cityIconEl.id = 'cityIcon'
        document.querySelector('#cityIcon').src = `http://openweathermap.org/img/wn/${cityIconId}.png`;
    }, 
       
};
// fetch data request for uv index
/*let respDataUv = {
    apiKey3: '', //api key 3
    fetchData3: function() {  
        //send api request for api 3.0
        fetch(
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
};*/

let resp5day = {
    apiKey2: '', //api key
    fetchData: function(city) {
    //send api request
        fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${this.apiKey2}&cnt=5`) //api URL as template literal)
        //receive response in json
        .then((response) => response.json())
        //receive data, create data object
        .then((data) => this.writeData(data)); 
    },
    writeData: function(data) {
        console.log(data);
        //assign data to variables
    //DAY 1
        const day1Date = moment().add(24, 'hours').format("(DD/MM/YYYY)");
        const day1IconId = data.list[0].weather[0].icon;
        const day1Temp = data.list[0].main.temp;
        const day1Wind = data.list[0].wind.speed;
        const day1Humid = data.list[0].main.humidity;
        //change text of html elements
        document.querySelector('#day1Date').textContent = `${day1Date}`;
            //query icon element 
            const day1IconEl = document.querySelector('#day1Icon');
            //create img element
            const day1IconImg = document.createElement('img');
            day1IconEl.appendChild(day1IconImg);
            day1IconImg.id = 'day1IconImg';
            //append to icon to icon-element
            document.querySelector('#day1IconImg').src = `http://openweathermap.org/img/wn/${day1IconId}.png`;   
        document.querySelector('#day1Temp').textContent = `Temp: ${day1Temp}°F`;
        document.querySelector('#day1Wind').textContent = `Wind: ${day1Wind} MPH`;
        document.querySelector('#day1Humid').textContent = `Humidity: ${day1Humid}%`;
    //DAY 2
        const day2Date = moment().add(48, 'hours').format("(DD/MM/YYYY)");
        const day2IconId = data.list[1].weather[0].icon;
        const day2Temp = data.list[1].main.temp;
        const day2Wind = data.list[1].wind.speed;
        const day2Humid = data.list[1].main.humidity;
        //change text of html elements
        document.querySelector('#day2Date').textContent = `${day2Date}`;
            //query icon element 
            const day2IconEl = document.querySelector('#day2Icon');
            //create img element
            const day2IconImg = document.createElement('img');
            day2IconEl.appendChild(day2IconImg);
            day2IconImg.id = 'day2IconImg';
            //append to icon to icon-element
            document.querySelector('#day2IconImg').src = `http://openweathermap.org/img/wn/${day2IconId}.png`; 
        document.querySelector('#day2Temp').textContent = `Temp: ${day2Temp}°F`;
        document.querySelector('#day2Wind').textContent = `Wind: ${day2Wind} MPH`;
        document.querySelector('#day2Humid').textContent = `Humidity: ${day2Humid}%`;
    //DAY 3
        const day3Date = moment().add(72, 'hours').format("(DD/MM/YYYY)");
        const day3IconId = data.list[2].weather[0].icon;
        const day3Temp = data.list[2].main.temp;
        const day3Wind = data.list[2].wind.speed;
        const day3Humid = data.list[2].main.humidity;
        //change text of html elements
        document.querySelector('#day3Date').textContent = `${day3Date}`;
            //query icon element 
            const day3IconEl = document.querySelector('#day3Icon');
            //create img element
            const day3IconImg = document.createElement('img');
            day3IconEl.appendChild(day3IconImg);
            day3IconImg.id = 'day3IconImg';
            //append to icon to icon-element
            document.querySelector('#day3IconImg').src = `http://openweathermap.org/img/wn/${day3IconId}.png`; 
        document.querySelector('#day3Temp').textContent = `Temp: ${day3Temp}°F`;
        document.querySelector('#day3Wind').textContent = `Wind: ${day3Wind} MPH`;
        document.querySelector('#day3Humid').textContent = `Humidity: ${day3Humid}%`;
    //DAY 4
        const day4Date = moment().add(96, 'hours').format("(DD/MM/YYYY)");
        const day4IconId = data.list[3].weather[0].icon;
        const day4Temp = data.list[3].main.temp;
        const day4Wind = data.list[3].wind.speed;
        const day4Humid = data.list[3].main.humidity;
        //change text of html elements
        document.querySelector('#day4Date').textContent = `${day4Date}`;
            //query icon element 
            const day4IconEl = document.querySelector('#day4Icon');
            //create img element
            const day4IconImg = document.createElement('img');
            day4IconEl.appendChild(day4IconImg);
            day4IconImg.id = 'day4IconImg';
            //append to icon to icon-element
            document.querySelector('#day4IconImg').src = `http://openweathermap.org/img/wn/${day4IconId}.png`; 
        document.querySelector('#day4Temp').textContent = `Temp: ${day4Temp}°F`;
        document.querySelector('#day4Wind').textContent = `Wind: ${day4Wind} MPH`;
        document.querySelector('#day4Humid').textContent = `Humidity: ${day4Humid}%`;
    //DAY 5
        const day5Date = moment().add(120, 'hours').format("(DD/MM/YYYY)");
        const day5IconId = data.list[4].weather[0].icon;
        const day5Temp = data.list[4].main.temp;
        const day5Wind = data.list[4].wind.speed;
        const day5Humid = data.list[4].main.humidity;
        //change text of html elements
        document.querySelector('#day5Date').textContent = `${day5Date}`;
            //query icon element 
            const day5IconEl = document.querySelector('#day5Icon');
            //create img element
            const day5IconImg = document.createElement('img');
            day5IconEl.appendChild(day5IconImg);
            day5IconImg.id = 'day5IconImg';
            //append to icon to icon-element
            document.querySelector('#day5IconImg').src = `http://openweathermap.org/img/wn/${day5IconId}.png`; 
        document.querySelector('#day5Temp').textContent = `Temp: ${day5Temp}°F`;
        document.querySelector('#day5Wind').textContent = `Wind: ${day5Wind} MPH`;
        document.querySelector('#day5Humid').textContent = `Humidity: ${day5Humid}%`;
    },
};
//create city name buttons in search history
let histData = {
    appendCity: function(city) {
        const histElBtn = document.createElement('button');
        histElBtn.classList.add('histEl','btn','btn-secondary','col-12', 'bg-dark', 'text-white');
        histElBtn.type = 'button';
        histElBtn.textContent = city;
        document.querySelector('#cityHist').appendChild(histElBtn); 
        //create listener for search history buttons
        histElBtn.addEventListener('click', function(event) {
            event.preventDefault();
            if (event.target.classList.contains('histEl')) {
            respData.fetchData(event.target.textContent);
            resp5day.fetchData(event.target.textContent);
            }
        });
    }
};
//create listener for search button and run fetch(s)
searchBtnEl.addEventListener('click', function(event) {
    //prevent event bubbling
    event.preventDefault();
    respData.fetchData(searchInputEl.value.trim());
    resp5day.fetchData(searchInputEl.value.trim());
    histData.appendCity(searchInputEl.value.trim().toUpperCase());
    //respDataUv.fetchData3();
});



