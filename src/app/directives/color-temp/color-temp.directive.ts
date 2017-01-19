import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[color-temp]' })

export class ColorTemp implements OnInit {
    @Input() itemTemp: number;
    element: ElementRef;

    constructor(el: ElementRef) {
        this.element = el;
    }

    ngOnInit() {
        this.setColorTemp(this.itemTemp);
    }

    private setColorTemp(temp: number): void {
        if (temp >= 30) {
            this.element.nativeElement.style.backgroundColor = "#ff5a00";
        }
        else if (temp > 20 && temp < 30) {
            this.element.nativeElement.style.backgroundColor = "#ff9600";
        }
        else if (temp >= 18 && temp <= 20) {
            this.element.nativeElement.style.backgroundColor = "#fffa00";
        }
        else if (temp >= 8 && temp < 18) {
            this.element.nativeElement.style.backgroundColor = "#3eff00";
        }
        else if (temp >= 1 && temp < 8) {
            this.element.nativeElement.style.backgroundColor = "#00ffd0";
        }
        else if (temp > -1 && temp < 1) {
            this.element.nativeElement.style.backgroundColor = "#00fff4";
        }
        else if (temp >= -10 && temp <= -1) {
            this.element.nativeElement.style.backgroundColor = "#00c4ff";
        }
        else this.element.nativeElement.style.backgroundColor = "#0084ff";
    }
}