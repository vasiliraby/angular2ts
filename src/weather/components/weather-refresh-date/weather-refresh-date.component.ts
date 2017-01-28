import { Component, Input } from '@angular/core';

@Component({
    selector: 'weather-refresh-date',
    templateUrl: 'src/weather/components/weather-refresh-date/weather-refresh-date.component.html',
    styleUrls: ['src/weather/components/weather-refresh-date/weather-refresh-date.component.css'],
})

export class WeatherRefreshDate {
    @Input('actualWeatherDate') lastRefreshed: number;
}