import { Component, Input, OnInit, ElementRef, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable, BehaviorSubject }                                                                 from 'rxjs/Rx';

@Component({
    selector: 'wind-info',
    templateUrl: 'src/weather/components/wind-info/wind-info.component.html',
    styleUrls: ['src/weather/components/wind-info/wind-info.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class WindInfoComponent implements OnInit {
    @Input() deg: number;
    @Input() speed: number;
    @ViewChild('windArrow') windArrow: ElementRef;
    tooltip: string;

    constructor(private cd: ChangeDetectorRef) {};

    private getWindDirection(direction: number): string {
        let val: number = Math.floor((direction / 22.5) + 0.5);
        let windDirections: Array<string> = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        this.tooltip = windDirections[val % 16];
        this.cd.markForCheck();
        return this.tooltip;
    };

    ngOnInit(): void {
        this.showWindDirection();
    };

    showWindDirection(): void {
        let subject = new BehaviorSubject("Unknown direction");

        let subscription = subject.subscribe(
            function (x) {
                console.log('Next: ' + x.toString());
            },
            function (err) {
                console.log('Error: ' + err);
            },
            function () {
                console.log('Completed');
            });

        Observable.fromEvent(this.windArrow.nativeElement, 'mouseenter')
        .subscribe(() => {
            let direction: string = this.getWindDirection(this.deg);
            subject.next(direction);
            subject.complete();
        });
    };
}