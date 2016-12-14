import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'kelvinToCelcius'})

export class KelvinToCelciusPipe implements PipeTransform {
    transform(value: number): string {
        if (typeof value === 'number') {
            return (value - 273.15).toFixed(1) + ' \u2103';
        } else {
            return value;
        }
    }
}