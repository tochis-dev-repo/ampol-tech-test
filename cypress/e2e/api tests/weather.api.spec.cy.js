//To Do
/*
- Write a method to make api calls
- Implement the Describe method
- translate JSON call to XML
*/
function buildWeatherUrl(query='Melbourne', 
    airQualityQuery='no',
    url=Cypress.env('weather_api_server'), 
    key=Cypress.env('key'))
    {
        return `${url}?key=${key}&q=${query}&aqi=${airQualityQuery}`;
    }