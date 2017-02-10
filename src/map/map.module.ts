import { NgModule }      from '@angular/core';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { MapComponent }  from './components/map/map.component';

const GOOGLEMAPS_API_KEY: string = 'AIzaSyAM7d7El7L7XpS5HWJYu2l8r-Yf7DjrGBQ';

@NgModule({
    imports: [
        AgmCoreModule.forRoot({
            apiKey: GOOGLEMAPS_API_KEY
        })
    ],
    declarations: [
        MapComponent
    ],
    exports: [
        MapComponent
    ]
})

export class MapModule { }