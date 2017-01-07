import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'map-component',
    templateUrl: 'src/app/components/map/map.component.html',
    styleUrls: ['src/app/components/map/map.component.css'],
})

export class MapComponent {
    @Input() lat: number;
    @Input() lng: number;
    zoom: number = 10;
    scrollwheel: boolean = false;
}