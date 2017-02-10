import { NgModule }                    from '@angular/core';
import { CommonModule }                from '@angular/common';
import { FormsModule }                 from '@angular/forms';

import { WeatherComponent }            from './components/weather/weather.component';
import { WeatherItemComponent }        from './components/weather-item/weather-item.component';
import { WeatherRefreshDate }          from './components/weather-refresh-date/weather-refresh-date.component';
import { WindInfoComponent }           from './components/wind-info/wind-info.component';
import { OverallConditionsComponent }  from './components/overall-conditions/overall-conditions.component';
import { KelvinToCelciusPipe }         from './pipes/kelvin-to-celcius.pipe';
import { ColorTemperatureDirective }   from './directives/color-temp/color-temp.directive';
import { RotateDirective }             from './directives/rotate/rotate.directive';
import { Preloader }                   from './components/preloader/preloader.component';
import { WeatherControlFormComponent } from './components/weather-control-form/weather-control-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        WeatherComponent,
        WeatherItemComponent,
        WeatherRefreshDate,
        WindInfoComponent,
        OverallConditionsComponent,
        KelvinToCelciusPipe,
        ColorTemperatureDirective,
        RotateDirective,
        Preloader,
        WeatherControlFormComponent
    ],
    exports: [
        WeatherComponent
    ]
})

export class WeatherModule { }