import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'kelvinToCelcius'})

export class KelvinToCelciusPipe implements PipeTransform {
    transform(value: number): number {
        if (typeof value === 'number') {
            return Number((value - 273.15).toFixed(1));
        } else {
            return value;
        }
    }
}