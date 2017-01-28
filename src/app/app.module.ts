// Libs
import 'rxjs';
import 'zone.js';
import 'reflect-metadata';

import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';

import { AgmCoreModule }              from 'angular2-google-maps/core';

import { AppComponent }               from './components/app/app.component';
import { AppHeader }                  from './components/header/header.component';
import { AppFooter }                  from './components/footer/footer.component';
import { WeatherComponent }           from './components/weather/weather.component';
import { WeatherItemComponent }       from './components/weather-item/weather-item.component';
import { WeatherRefreshDate }         from './components/weather-refresh-date/weather-refresh-date.component';
import { MapComponent }               from './components/map/map.component';
import { WindInfoComponent }          from './components/wind-info/wind-info.component';
import { Preloader }                  from './components/preloader/preloader.component';
import { OverallConditionsComponent } from './components/overall-conditions/overall-conditions.component';
import { KelvinToCelciusPipe }        from './pipes/kelvin-to-celcius.pipe';
import { ColorTemperatureDirective }  from './directives/color-temp/color-temp.directive';
import { RotateDirective }            from './directives/rotate/rotate.directive';

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
        WeatherItemComponent,
        WeatherRefreshDate,
        MapComponent,
        WindInfoComponent,
        OverallConditionsComponent,
        Preloader,
        KelvinToCelciusPipe,
        ColorTemperatureDirective,
        RotateDirective
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }