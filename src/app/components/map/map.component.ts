import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import LocationService from '../../services/location.service';

@Component({
    selector: 'map-component',
    templateUrl: 'src/app/components/map/map.component.html',
    styleUrls: ['src/app/components/map/map.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MapComponent implements OnInit {
    constructor(private cd: ChangeDetectorRef) {}

    lat: number = null;
    lng: number = null;
    zoom: number = 10;
    scrollwheel: boolean = false;

    ngOnInit(): void {
        this.showMap();
    }

    showMap(): void {
        let locationService: LocationService = new LocationService();

        locationService.getLocation().then((pos: Position) => {
            this.lng = pos.coords.longitude;
            this.lat = pos.coords.latitude;
            this.cd.markForCheck();
        },
        (reason: PositionError) => {
            let weatherContainer: HTMLElement = document.getElementById('weather');

            weatherContainer.classList.add('error');
            weatherContainer.textContent = `Error: ${reason.message}.`;
        });
    }
}