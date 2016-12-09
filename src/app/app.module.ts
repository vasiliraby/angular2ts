import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { AppComponent }     from './app.component';
import { AppHeader }        from './header.component';
import { AppFooter }        from './footer.component';
import { WeatherComponent } from './weather.component';
import { MapComponent }     from './map.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, AppHeader, AppFooter, WeatherComponent, MapComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }