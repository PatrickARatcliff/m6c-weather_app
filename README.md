# m6c-weather_app
*Quickly find weather, basic information for a given city*

**User Story**
> As a user i want to be able to view weather information for a city of interest, view the 5-day forecast, and save the searches so i can I access them quickly.

## Preview

![PreviewImage](./assets/Image%208-15-22%20at%208.50%20PM.jpg)

## Use
To get started enter a valid city name and click on the search button. The main display will populate with basic weather information of the given city. There will be a 5-day forecast for the given city populated on the cards below.

You may notice that every time you search for a given city, that search is saved in the form of a button populated below the search form. Every time you search, an additional button will be created and added to the list. To view weather data for past searches, simply click on the button with the desired city's name.

The UV index on the main display will have a green, yellow or red background. The color highlights the relative danger in the given city.

## Functionality 
- Search weather data by city name
- If not a valid city name, the page will give a warning pop-up --> re-enter a valid city name
- Weather data and icons, except UV index,from [OpenWeatherMap](https://openweathermap.org/current#name)
- UV index data from [Weatherbit.io](https://www.weatherbit.io/api/weather-current)
- All search results are saved and will be there even after closing the site
---