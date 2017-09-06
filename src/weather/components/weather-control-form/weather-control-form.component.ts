import { Component }            from '@angular/core';
import { NgForm }               from '@angular/forms';

import { RoundToPrecisionPipe } from './../../../app/pipes/round-to-precision.pipe';

@Component({
    selector: 'weather-control-form',
    templateUrl: 'src/weather/components/weather-control-form/weather-control-form.component.html',
    styleUrls: ['src/weather/components/weather-control-form/weather-control-form.component.css']
})

export class WeatherControlFormComponent {
    private tempGrades: string[] = ['celcius', 'fahrenheit', 'kelvin'];
    private currentGrade: string = 'celcius';
    private isRelevant: boolean = false;

    changeWeatherSettings(form: NgForm) {
        let settings: {temp: string, isRelevant: boolean} = form.value;
        this.updateTemp(settings.temp);
        this.updateItems(settings.isRelevant);
    }

    private updateItems(isRelevant: boolean): void {
        if (typeof isRelevant === 'boolean' && this.isRelevant !== isRelevant) {
            this.isRelevant = isRelevant;
            let container = document.getElementsByClassName('weather__items')[0];

            if (isRelevant === true) {
                let items: Element[] = Array.from(document.getElementsByClassName('weather-item'));
                let length: number = items.length;
                for (let i = 9; i < length; i++) {
                    items[i].classList.add('hidden-item');
                }
                container.classList.add('relevant-only');
            } else {
                let items: Element[] = Array.from(document.getElementsByClassName('weather-item hidden-item'));
                let length: number = items.length;
                for (let item of items) {
                    item.classList.remove('hidden-item');
                }
                container.classList.remove('relevant-only');
            }
        }
    }

    private updateTemp(grade: string): void {
        if (grade === this.currentGrade) return;
        let tempArray: Element[] = Array.from(document.getElementsByClassName('weather-item__temp'));
        let regex = /-{0,1}\d{1,}/;
        switch (grade) {
            case "celcius":
                if (this.currentGrade === 'celcius') {
                    break;
                } else if (this.currentGrade === 'fahrenheit') {
                    tempArray.forEach(function(el: Element) {
                        let newTemp: number = f2c(Number(el.textContent.match(regex)));
                        let start: number = el.textContent.search(regex);
                        el.textContent = el.textContent.slice(0, start) + ' ' + newTemp + ' ℃';
                    });
                } else if (this.currentGrade === 'kelvin') {
                    tempArray.forEach(function(el: Element) {
                        let newTemp: number = k2c(Number(el.textContent.match(regex)));
                        let start: number = el.textContent.search(regex);
                        el.textContent = el.textContent.slice(0, start) + ' ' + newTemp + ' ℃';
                    });
                }
                this.currentGrade = 'celcius';
                break;
            case "fahrenheit":
                if (this.currentGrade === 'fahrenheit') {
                    break;
                } else if (this.currentGrade === 'celcius') {
                    tempArray.forEach(function(el: Element) {
                        let newTemp: number = c2f(Number(el.textContent.match(regex)));
                        let start: number = el.textContent.search(regex);
                        el.textContent = el.textContent.slice(0, start) + ' ' + newTemp + ' F';
                    });
                } else if (this.currentGrade === 'kelvin') {
                    tempArray.forEach(function(el: Element) {
                        let newTemp: number = k2f(Number(el.textContent.match(regex)));
                        let start: number = el.textContent.search(regex);
                        el.textContent = el.textContent.slice(0, start) + ' ' + newTemp + ' K';
                    });
                }
                this.currentGrade = 'fahrenheit';
                break;
            case "kelvin":
                if (this.currentGrade === 'kelvin') {
                    break;
                } else if (this.currentGrade === 'celcius') {
                    tempArray.forEach(function(el: Element) {
                        let newTemp: number = c2k(Number(el.textContent.match(regex)));
                        let start: number = el.textContent.search(regex);
                        el.textContent = el.textContent.slice(0, start) + ' ' + newTemp + ' K';
                    });
                } else if (this.currentGrade === 'fahrenheit') {
                    tempArray.forEach(function(el: Element) {
                        let newTemp: number = f2k(Number(el.textContent.match(regex)));
                        let start: number = el.textContent.search(regex);
                        el.textContent = el.textContent.slice(0, start) + ' ' + newTemp + ' K';
                    });
                }
                this.currentGrade = 'kelvin';
        }

        function c2f(temp: number): number {
            return new RoundToPrecisionPipe().transform(temp * 1.8 + 32, 1);
        }

        function c2k(temp: number): number {
            return new RoundToPrecisionPipe().transform(temp + 273.15, 1);
        }

        function f2c(temp: number): number {
            return new RoundToPrecisionPipe().transform((temp - 32) / 1.8, 1);
        }

        function f2k(temp: number): number {
            return new RoundToPrecisionPipe().transform((temp + 459.67) * 5 / 9, 1);
        }

        function k2c(temp: number): number {
            return new RoundToPrecisionPipe().transform(temp - 273.15, 1);
        }

        function k2f(temp: number): number {
            return new RoundToPrecisionPipe().transform(temp * 9 / 5 - 459.67, 1);
        }
    }
}