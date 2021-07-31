function getLocation() {
    if (navigator.geolocation) {
    //pass in show position() function to get current position
    navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        alert("geolocation is not supported by this browser.");
    }
}

var makeHTML = function() {
    document.getElementById('todaysWeather').innerHTML=
    JSON.stringify(json, undefined, 2);
};
//fetch 
fetch ("https://api.weatherbit.io/v2.0/current")
.then(function(response) {
    return response.json();
})
.then(function(localWeather) {
    makeHTML(localWeather);
})
//validate request
.catch(function(error) {
    console.log(error);
});

//after getCurrentPosition(), this will run
function showPosition(position) {
    //get coordinates from the given object
    var lat = position.coords.latitude;
    var lon = postion.coords.longitude;
    console.log("your coordinates are latitude:" + lat + "longitude" + lon);
    //call the next function, passing in the coords
    showPosition();
}
