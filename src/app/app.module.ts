// Libs
import 'zone.js';
import 'reflect-metadata';

import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { HttpModule }            from '@angular/http';
import { RouterModule, Routes }  from '@angular/router';

import { MapModule }             from './../map/map.module';
import { WeatherModule }         from './../weather/weather.module';

import { AppComponent }          from './components/app/app.component';
import { AppHeader }             from './components/header/header.component';
import { AppFooter }             from './components/footer/footer.component';
import { LocationService }       from './services/location.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: 'map',
        component: MapModule,
        data: { title: 'Your position on the map' }
    },
    {
        path: 'weather',
        component: WeatherModule,
        data: { title: 'Actual Weather' }
    },
    {
        path: '',
        redirectTo: '/weather',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
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
        AppFooter,
        PageNotFoundComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }