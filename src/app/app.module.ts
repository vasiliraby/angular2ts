// Libs
import 'rxjs';
import 'zone.js';
import 'reflect-metadata';

import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';

import { AgmCoreModule }       from 'angular2-google-maps/core';

import { AppComponent }        from './components/app/app.component';
import { AppHeader }           from './components/header/header.component';
import { AppFooter }           from './components/footer/footer.component';
import { WeatherComponent }    from './components/weather/weather.component';
import { WeatherRefreshDate }  from './components/weather-refresh-date/weather-refresh-date.component';
import { MapComponent }        from './components/map/map.component';
import { KelvinToCelciusPipe } from './pipes/kelvin-to-celcius.pipe';
import { Preloader }           from './components/preloader/preloader.component';

const GOOGLEMAPS_API_KEY: string = 'AIzaSyAM7d7El7L7XpS5HWJYu2l8r-Yf7DjrGBQ';

@NgModule({
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
        apiKey: GOOGLEMAPS_API_KEY
        })
    ],
    declarations: [
        AppComponent,
        AppHeader,
        AppFooter,
        WeatherComponent,
        WeatherRefreshDate,
        MapComponent,
        KelvinToCelciusPipe,
        Preloader
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }