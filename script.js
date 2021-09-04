//const url= 'https://www.weatherapi.com/my/91b29ef9b94649bc8fe162716210108'
//const apiKey= '91b29ef9b94649bc8fe162716210108'

var makeHTML = function(json) {
    document.getElementById('json').innerHTML = 
    json.stringify(json, undefined, 2);
};

//fetch geoURL api 
var geoURL = "https://www.mapquestapi.com/geocoding/v1/address?key=i59AhjaYZTQaOPj86iKkHTeoACIvMK7I&location="
    var addressInput = document.querySelector("input[name='address']").value;
    var cityInput = document.querySelector("input[name='city']").value;
    var stateInput = document.querySelector("select[name='state']").value;

    fetch(geoURL)
    .then (function(response) {
        return response.json();
    })
    .then (function(response) {
        return(response);
    });