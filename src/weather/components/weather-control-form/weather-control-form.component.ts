import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';

@Component({
    selector: 'weather-control-form',
    templateUrl: 'src/weather/components/weather-control-form/weather-control-form.component.html',
    styleUrls: ['src/weather/components/weather-control-form/weather-control-form.component.css']
})

export class WeatherControlFormComponent {
    private tempGrades: string[] = ['celcius', 'fahrenheit', 'kelvin'];

    changeWeatherSettings(form: NgForm) {
      console.log(form.value);
  }
}