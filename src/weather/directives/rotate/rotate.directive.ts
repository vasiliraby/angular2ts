import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[rotate]' })

export class RotateDirective implements OnInit {
    @Input() rotateDeg: number;
    element: ElementRef;

    constructor(el: ElementRef) {
        this.element = el;
    }

    ngOnInit() {
        this.element.nativeElement.style.transform = `rotate(${this.rotateDeg}deg)`;
    }
}