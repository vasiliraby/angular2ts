import { Component, OnInit }    from '@angular/core';

import { IWeatherItems }        from './weather-items.interface';
import { RoundToPrecisionPipe } from '../../pipes/round-to-precision.pipe';
import LocationService          from '../../services/location.service';
import HttpService              from '../../services/http.service';

@Component({
    selector: 'weather-component',
    templateUrl: 'src/app/templates/weather/weather.component.html',
    styleUrls: ['src/app/templates/weather/weather.component.css']
})

export class WeatherComponent implements OnInit {
    weatherItems: IWeatherItems;
    actualWeatherDate: number;
    weatherIsLoaded: boolean = false;

    ngOnInit(): void {
        this.showWeather();
    }

    showWeather(): void {
        let locationService: LocationService = new LocationService();
        let weatherContainer: HTMLElement = document.getElementById('weather');

        locationService.getLocation().then((pos: Position) => {
            let lng: number = new RoundToPrecisionPipe().transform(pos.coords.longitude, 5);
            let lat: number = new RoundToPrecisionPipe().transform(pos.coords.latitude, 5);

            this.getWeatherData(lat, lng);
        },
        (reason: PositionError) => {
            weatherContainer.classList.add('error');
            weatherContainer.textContent = `Error: ${reason.message}.`;
        });
    }

    private getWeatherData(lat: number, lng: number): void {
        let httpService: HttpService = new HttpService();
        const WEATHER_API_KEY: string = '103b41f82bea70d2198ab91ea029dcde';
        let url: string = 'http://api.openweathermap.org/data/2.5/find?lat=' + lat + '&lon=' + lng + '&cnt=500&lang=ru&APPID=' + WEATHER_API_KEY;

        httpService.makeRequest(url).then((data) => {
            let weatherData = data.list;
            this.weatherItems = data.list;

            this.actualWeatherDate = Number(weatherData[0].dt + '000');
            this.weatherIsLoaded = true;
        }, (reason: string) => {
            let weatherContainer: HTMLElement = document.getElementById('weather');

            weatherContainer.classList.add('error');
            weatherContainer.textContent = reason;
        });
    }
}