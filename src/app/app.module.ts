// Libs
import 'rxjs';
import 'zone.js';
import 'reflect-metadata';

import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';

import { MapModule }       from './../map/map.module';
import { WeatherModule }   from './../weather/weather.module';

import { AppComponent }    from './components/app/app.component';
import { AppHeader }       from './components/header/header.component';
import { AppFooter }       from './components/footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        MapModule,
        WeatherModule
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