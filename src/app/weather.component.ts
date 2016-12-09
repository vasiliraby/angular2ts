import { Component, OnInit } from '@angular/core';

import LocationService from './location.service';
import HttpService from './http.service';

@Component({
    selector: 'weather-component',
    templateUrl: 'src/app/templates/weather.component.html',
    styleUrls: ['src/app/templates/weather.component.css']
})

export class WeatherComponent implements OnInit {

    ngOnInit(): void {
        this.showWeather();
    }

    showWeather(): void {
        let locationService: LocationService = new LocationService();

        locationService.getLocation().then((pos: Position) => {
        let lng: number = pos.coords.longitude;
        let lat: number = pos.coords.latitude;

        getWeatherData(lat, lng);

        function getWeatherData(lat: number, lng: number): void {
            let httpService: HttpService = new HttpService();
            const WEATHER_API_KEY: string = '103b41f82bea70d2198ab91ea029dcde';
            let url: string = 'http://api.openweathermap.org/data/2.5/find?lat=' + lat + '&lon=' + lng + '&cnt=500&lang=ru&APPID=' + WEATHER_API_KEY;

            interface IWeather {
                name: string;
                main: {
                    temp: number;
                    humidity: number;
                    pressure: number;
                };
            };

            httpService.makeRequest(url).then((data) => {
            let weatherData = data.list;
            let weatherFragment: DocumentFragment = document.createDocumentFragment();
            let weatherContainer: HTMLElement = document.getElementById('weather');

            weatherData.forEach((el: IWeather) => {
                let item: HTMLDivElement = document.createElement('div');
                let name: HTMLSpanElement = document.createElement('span');
                let temp: HTMLSpanElement = document.createElement('span');
                let humidity: HTMLSpanElement = document.createElement('span');
                let pressure: HTMLSpanElement = document.createElement('span');

                item.classList.add('weather-item');
                name.classList.add('weather-item__name');
                temp.classList.add('weather-item__temp');
                humidity.classList.add('weather-item__humidity');
                pressure.classList.add('weather-item__pressure');

                name.textContent = el.name;
                temp.textContent = `Temp: ${(el.main.temp - 273.15).toFixed(1)} \u2103`;
                humidity.textContent = `Humidity: ${el.main.humidity} %`;
                pressure.textContent = `Pressure: ${el.main.pressure} hpa`;

                item.appendChild(name);
                item.appendChild(temp);
                item.appendChild(humidity);
                item.appendChild(pressure);

                weatherFragment.appendChild(item);
            });

            weatherContainer.appendChild(weatherFragment);
        }, (reason: string) => {
            let weatherContainer: HTMLElement = document.getElementById('weather');

            weatherContainer.classList.add('error');
            weatherContainer.textContent = reason;
        });
        }
    },
    (reason: PositionError) => {
        let weatherContainer: HTMLElement = document.getElementById('weather');

        weatherContainer.classList.add('error');
        weatherContainer.textContent = `Error: ${reason.message}.`;
    });
    }
}