const url= 'https://www.weatherapi.com/my/91b29ef9b94649bc8fe162716210108'
const apiKey= '91b29ef9b94649bc8fe162716210108'

var makeHTML = function(json) {
    document.getElementById('json').innerHTML = 
    json.stringify(json, undefined, 2);
};

fetch("https://www.weatherapi.com/my/91b29ef9b94649bc8fe162716210108")
.then (function(response) {
    return response.json();
})
.then (function(weather) {
getWeather(weather);
});
