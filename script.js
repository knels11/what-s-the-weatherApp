const url= 'https://www.weatherapi.com/my/91b29ef9b94649bc8fe162716210108'
const apiKey= '91b29ef9b94649bc8fe162716210108'

var getWeather = function(json) {
    document.getElementById('todays-weather').innerHTML = 
    json.stringify(json, undefined, 2);
};

fetch(url)
.then (function(response) {
    return response.json();
})
.then (function(weather) {
getWeather(weather);
})
.catch (function(error) {
    console.log(error);
});

function getLocation() {
    if (navigator.geolocation) {
    //pass in show position() function to get current position
    navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        alert("geolocation is not supported by this browser.");
    }
};