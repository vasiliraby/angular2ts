// Libs
import 'zone.js';
import 'reflect-metadata';

import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { HttpModule }      from '@angular/http';

import { MapModule }       from './../map/map.module';
import { WeatherModule }   from './../weather/weather.module';

import { AppComponent }    from './components/app/app.component';
import { AppHeader }       from './components/header/header.component';
import { AppFooter }       from './components/footer/footer.component';
import { LocationService } from './services/location.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        MapModule,
        WeatherModule
    ],
    providers: [
        LocationService
    ],
    declarations: [
        AppComponent,
        AppHeader,
        AppFooter
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }