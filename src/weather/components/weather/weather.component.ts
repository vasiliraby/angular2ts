import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Http, RequestMethod, URLSearchParams, Request, Response }              from '@angular/http';

import { IWeatherItems }        from './weather-items.interface';
import { RoundToPrecisionPipe } from './../../../app/pipes/round-to-precision.pipe';

@Component({
    selector: 'weather-component',
    templateUrl: 'src/weather/components/weather/weather.component.html',
    styleUrls: ['src/weather/components/weather/weather.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeatherComponent implements OnInit {
    @Input() lat: number;
    @Input() lng: number;
    weatherItems: IWeatherItems;
    actualWeatherDate: number;
    weatherIsLoaded: boolean = false;
    favoriteItem: Component;
    errorMsg: string;

    constructor(private cd: ChangeDetectorRef, private http: Http) {
        // Set weather update every 5 min
        setInterval(() => {
            this.getWeatherData(this.lat, this.lng);
        }, 300000);
    }

    ngOnInit(): void {
        this.lat = new RoundToPrecisionPipe().transform(this.lat, 5);
        this.lng = new RoundToPrecisionPipe().transform(this.lng, 5);

        this.getWeatherData(this.lat, this.lng);
    }

    private getWeatherData(lat: number, lng: number): void {
        const WEATHER_API_KEY: string = '103b41f82bea70d2198ab91ea029dcde';
        const url: string = 'http://api.openweathermap.org/data/2.5/find';

        const urlParams = new URLSearchParams();
        urlParams.append('lat', lat.toString());
        urlParams.append('lon', lng.toString());
        urlParams.append('cnt', '50');
        urlParams.append('lang', 'en');
        urlParams.append('APPID', WEATHER_API_KEY);

        const request = new Request({
            method: RequestMethod.Get,
            url: url,
            search: urlParams
        });

        const response = this.http.request(request)
            .subscribe((response: Response) => {
                let weatherData = response.json().list;
                let currentWeatherDate: number = Number(weatherData[0].dt + '000');

                // Update the view only if the data was changed
                if (this.actualWeatherDate !== currentWeatherDate) {
                    this.weatherItems = weatherData;
                    this.actualWeatherDate = currentWeatherDate;
                    this.weatherIsLoaded = true;
                    this.cd.markForCheck();
                }
            });
    }

    toggleFavorite(favItem: Component): void {
        if (this.favoriteItem === favItem) {
            this.favoriteItem = null;
        } else this.favoriteItem = favItem;
    }
}