import { Component } from '@angular/core';

import LocationService from '../../services/location.service';

@Component({
    selector: 'my-app',
    templateUrl: 'src/app/components/app/app.component.html',
    styleUrls: ['src/app/components/app/app.component.css'],
})

export class AppComponent {
    constructor() {
        let locationService: LocationService = new LocationService();

        locationService.getLocation().then((pos: Position) => {
            this.lng = pos.coords.longitude;
            this.lat = pos.coords.latitude;
            this.loaded = true;
        },
        (reason: PositionError) => this.errorMsg = reason.message);
    }

    loaded: boolean = false;
    errorMsg: string;
    lat: number;
    lng: number;
}