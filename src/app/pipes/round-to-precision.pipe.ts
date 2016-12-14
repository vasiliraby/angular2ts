import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'roundToPrecision'})

export class RoundToPrecisionPipe implements PipeTransform {
    transform(value: number, precision: number): number {
        if (typeof value === 'number') {
            return +value.toFixed(precision);
        } else {
            return value;
        }
    }
}