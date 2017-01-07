import { Component, Input } from '@angular/core';

import { IWeatherItems }    from './../weather/weather-items.interface';

@Component({
    selector: 'weather-item',
    templateUrl: 'src/app/components/weather-item/weather-item.component.html',
    styleUrls: ['src/app/components/weather-item/weather-item.component.css'],
})

export class WeatherItem {
    @Input() itemData: IWeatherItems;
}