import LocationService from './location.service';
import HttpService from './http.service';

const WEATHER_API_KEY: string = '103b41f82bea70d2198ab91ea029dcde';

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
    let url: string = 'http://api.openweathermap.org/data/2.5/find?lat=' + lat + '&lon=' + lng + '&cnt=50&APPID=' + WEATHER_API_KEY;

    httpService.makeRequest(url).then((data) => {
        console.log(data);
    });
};