import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import LocationService from '../../services/location.service';

@Component({
    selector: 'map-component',
    templateUrl: 'src/app/templates/map/map.component.html',
    styleUrls: ['src/app/templates/map/map.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MapComponent implements OnInit {

    ngOnInit(): void {
        this.showMap();
    }

    showMap(): void {
        let locationService: LocationService = new LocationService();

        locationService.getLocation().then((pos: Position) => {
            let lng: number = pos.coords.longitude;
            let lat: number = pos.coords.latitude;

            initMap(lat, lng);

            function initMap(latitude: number, longitude: number) {
                let map: google.maps.Map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: latitude, lng: longitude},
                    scrollwheel: false,
                    zoom: 10
                });
            };
        },
        (reason: PositionError) => {
            let weatherContainer: HTMLElement = document.getElementById('weather');

            weatherContainer.classList.add('error');
            weatherContainer.textContent = `Error: ${reason.message}.`;
        });
    }
}