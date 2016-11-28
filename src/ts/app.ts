import LocationService from './LocationService';
import HttpService from './HttpService';

// Getting current location coordinates
let locationService: LocationService = new LocationService();

locationService.getLocation().then((pos: Position) => {
    let lng: number = pos.coords.longitude;
    let lat: number = pos.coords.latitude;

    console.log(`Longitude: ${pos.coords.longitude}`);
    console.log(`Latitude: ${pos.coords.latitude}`);

    getWeatherData(lat, lng);
});

// Getting weather for current location and 50 cities nearby
let httpService: HttpService = new HttpService();

function getWeatherData(lat: number, lng: number): void {
    let urlCurrentLocation = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&lang=ru&APPID=103b41f82bea70d2198ab91ea029dcde';
    let urlNearbyCities = 'http://api.openweathermap.org/data/2.5/find?lat=' + lat + '&lon=' + lng + '&cnt=50&lang=ru&APPID=103b41f82bea70d2198ab91ea029dcde';

    httpService.makeRequest(urlCurrentLocation).then(
        (response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
        });

    httpService.makeRequest(urlNearbyCities).then(
        (response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
        });
};