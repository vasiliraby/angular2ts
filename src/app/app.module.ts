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
import { WeatherItem }         from './components/weather-item/weather-item.component';
import { WeatherRefreshDate }  from './components/weather-refresh-date/weather-refresh-date.component';
import { MapComponent }        from './components/map/map.component';
import { WindInfo }            from './components/wind-info/wind-info.component';
import { Preloader }           from './components/preloader/preloader.component';
import { OverallConditions }   from './components/overall-conditions/overall-conditions.component';
import { KelvinToCelciusPipe } from './pipes/kelvin-to-celcius.pipe';
import { ColorTemp }           from './directives/color-temp/color-temp.directive';
import { Rotate }              from './directives/rotate/rotate.directive';

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
        WeatherItem,
        WeatherRefreshDate,
        MapComponent,
        WindInfo,
        OverallConditions,
        Preloader,
        KelvinToCelciusPipe,
        ColorTemp,
        Rotate
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }