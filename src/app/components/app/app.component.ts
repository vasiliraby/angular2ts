import { Component, OnInit } from '@angular/core';

import LocationService from '../../services/location.service';

@Component({
    selector: 'my-app',
    templateUrl: 'src/app/components/app/app.component.html',
    styleUrls: ['src/app/components/app/app.component.css'],
})

export class AppComponent implements OnInit {
    public lat: number;
    public lng: number;

    ngOnInit(): void {
        let locationService: LocationService = new LocationService();

        locationService.getLocation().then((pos: Position) => {
            this.lng = pos.coords.longitude;
            this.lat = pos.coords.latitude;
        },
        (reason: PositionError) => {
            let weatherContainer: HTMLElement = document.getElementById('weather');

            weatherContainer.classList.add('error');
            weatherContainer.textContent = `Error: ${reason.message}.`;
        });
    }
}