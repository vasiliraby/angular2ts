import { Injectable } from '@angular/core';

@Injectable()

export class LocationService {
    getLocation = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };
}