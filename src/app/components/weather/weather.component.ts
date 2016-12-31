import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef }    from '@angular/core';

import { IWeatherItems }        from './weather-items.interface';
import { RoundToPrecisionPipe } from '../../pipes/round-to-precision.pipe';
import HttpService              from '../../services/http.service';

@Component({
    selector: 'weather-component',
    templateUrl: 'src/app/components/weather/weather.component.html',
    styleUrls: ['src/app/components/weather/weather.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeatherComponent implements OnInit {
    constructor(private cd: ChangeDetectorRef) {
        // Set weather update every 5 min
        setInterval(() => {
            this.getWeatherData(this.lat, this.lng);
        }, 60000);
    }

    @Input() lat: number;
    @Input() lng: number;
    weatherItems: IWeatherItems;
    actualWeatherDate: number;
    weatherIsLoaded: boolean = false;
    favoriteItem: HTMLElement = null;

    ngOnInit(): void {
        this.lat = new RoundToPrecisionPipe().transform(this.lat, 5);
        this.lng = new RoundToPrecisionPipe().transform(this.lng, 5);

        this.getWeatherData(this.lat, this.lng);
    }

    private getWeatherData(lat: number, lng: number): void {
        const WEATHER_API_KEY: string = '103b41f82bea70d2198ab91ea029dcde';
        let httpService: HttpService = new HttpService();
        let url: string = 'http://api.openweathermap.org/data/2.5/find?lat=' + lat + '&lon=' + lng + '&cnt=500&lang=ru&APPID=' + WEATHER_API_KEY;

        httpService.makeRequest(url).then((data) => {
            let weatherData = data.list;
            this.weatherItems = data.list;

            // Update the view only if the data was changed
            if (this.actualWeatherDate !== Number(weatherData[0].dt + '000')) {
                this.actualWeatherDate = Number(weatherData[0].dt + '000');
                this.weatherIsLoaded = true;
                this.cd.markForCheck();
            }
        }, (reason: string) => {
            let weatherContainer: HTMLElement = document.getElementById('weather');

            weatherContainer.classList.add('error');
            weatherContainer.textContent = reason;
        });
    }

    toggleFavorite(event: MouseEvent): void {
        let self: this = this;
        let el: EventTarget = event.target;

        toggler(el as HTMLElement);

        function toggler(element: HTMLElement) {
            if (element.classList.contains('weather-item')) {
                if (self.favoriteItem === element) {
                    self.favoriteItem.classList.remove('favorite');
                    self.favoriteItem = null;
                    return;
                } else if (self.favoriteItem) {
                    self.favoriteItem.classList.remove('favorite');
                }
                self.favoriteItem = element;
                self.favoriteItem.classList.add('favorite');
            } else if (element.parentElement && element.parentElement !== el) {
                toggler(element.parentElement);
            }
        }
    }
}