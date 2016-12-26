import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';

import LocationService from '../../services/location.service';

@Component({
    selector: 'map-component',
    templateUrl: 'src/app/components/map/map.component.html',
    styleUrls: ['src/app/components/map/map.component.css'],
})

export class MapComponent {
    // constructor(private cd: ChangeDetectorRef) {}

    // Set default coords if nothing was in @input
    @Input() lat: number = 54; 
    @Input() lng: number = 27;
    zoom: number = 10;
    scrollwheel: boolean = false;

    // ngOnInit(): void {
    //     this.showMap();
    // }

    // showMap(): void {
    //     let locationService: LocationService = new LocationService();

    //     locationService.getLocation().then((pos: Position) => {
    //         this.lng = pos.coords.longitude;
    //         this.lat = pos.coords.latitude;
    //         this.cd.markForCheck();
    //     },
    //     (reason: PositionError) => {
    //         let weatherContainer: HTMLElement = document.getElementById('weather');

    //         weatherContainer.classList.add('error');
    //         weatherContainer.textContent = `Error: ${reason.message}.`;
    //     });
    // }
}