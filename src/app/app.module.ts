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
import { MapComponent }        from './components/map/map.component';
import { KelvinToCelciusPipe } from './pipes/kelvin-to-celcius.pipe';
import { Preloader }           from './components/preloader/preloader.component';

@NgModule({
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAM7d7El7L7XpS5HWJYu2l8r-Yf7DjrGBQ'
        })
    ],
    declarations: [
        AppComponent,
        AppHeader,
        AppFooter,
        WeatherComponent,
        MapComponent,
        KelvinToCelciusPipe,
        Preloader
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }