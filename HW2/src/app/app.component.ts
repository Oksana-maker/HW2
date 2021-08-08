import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {JsonPlaceholderService} from "./common/services/json-placeholder.service";
import {Observable} from "rxjs";
import {CurrentWeather} from "@app-common/services/interfaces/current-weather/current-weather.interface";
import {ListWeatherInfo} from "@app-common/services/interfaces/five-days-weather/list-weather";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW2';

  weather: boolean = false;
  weatherByHours: boolean = false;

  textForBtnCurrentWeather: string = 'Show current-weather';
  textForBtnFiveDaysWeatherByHours: string = 'Show five-days-weather by hours';

  currentWeather$!: Observable<CurrentWeather[]>;

  fiveDaysWeather$!: Observable<ListWeatherInfo[]>;

  constructor(private readonly jsonPlaceholderService: JsonPlaceholderService) {
  }

  ngOnInit(): void{

    this.currentWeather$ = this.jsonPlaceholderService.getCurrentWeatherByCity("Dnipro");

    this.fiveDaysWeather$ = this.jsonPlaceholderService.getFiveDaysWeatherByCity("Dnipro");
  }

  onBtnCurWeatherClick() {
    if(this.weather) {
      this.textForBtnCurrentWeather = 'Show current-weather';
      this.weather = false;
    }
    else {
      this.textForBtnCurrentWeather = 'Hide current-weather';
      this.weather = true;
      this.weatherByHours = false;
    }
  }

  onBtnWeatherByHoursClick() {
    if(this.weatherByHours) {
      this.textForBtnFiveDaysWeatherByHours = 'Show five-days-weather by hours';
      this.weatherByHours = false;
    }
    else {
      this.textForBtnFiveDaysWeatherByHours = 'Hide five-days-weather by hours';
      this.weatherByHours = true;
      this.weather = false;
    }
  }

}
