import LocationService from './LocationService';
import HttpService from './HttpService';

// Getting current location coordinates
let locationService: LocationService = new LocationService();

locationService.getLocation().then((pos: Position) => {
    console.log(`Longitude: ${pos.coords.longitude}`);
    console.log(`Latitude: ${pos.coords.latitude}`);
});

// Getting weather for current location and 50 cities nearby
let httpService: HttpService = new HttpService();

httpService.makeRequest('http://api.openweathermap.org/data/2.5/weather?lat=53.904539799999995&lon=27.5615244&APPID=103b41f82bea70d2198ab91ea029dcde').then(
    (response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    });

httpService.makeRequest('http://api.openweathermap.org/data/2.5/find?lat=53.9&lon=27.5&cnt=50&lang=ru&APPID=103b41f82bea70d2198ab91ea029dcde').then(
    (response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    });