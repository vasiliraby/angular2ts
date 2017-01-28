import { Component, Input } from '@angular/core';

@Component({
    selector: 'weather-item',
    templateUrl: 'src/app/components/weather-item/weather-item.component.html',
    styleUrls: ['src/app/components/weather-item/weather-item.component.css'],
})

export class WeatherItemComponent {
    @Input() name: string;
    @Input() temp: number;
    @Input() humidity: number;
    @Input() pressure: number;
    @Input() deg: number;
    @Input() speed: number;
    @Input() icon: string;
    @Input() description: string;
}