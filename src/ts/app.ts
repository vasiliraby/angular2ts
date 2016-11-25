///<reference path="./typings/google.maps.d.ts" />

// http://openweathermap.org/api
// API call: http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=103b41f82bea70d2198ab91ea029dcde
// http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=50

function getLocation() {
    let coordinates: any;

    let options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos: any): void {
        coordinates = pos;
    }

    function error(err: any): void {
      console.log('Error: ' + err);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

    return coordinates;
}

getLocation();
