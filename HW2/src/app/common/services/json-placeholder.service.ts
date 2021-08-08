import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";
import {FiveDaysWeather} from "@app-common/services/interfaces/five-days-weather/five-days-weather.interface";
import {Observable} from "rxjs";



@Injectable()
export class JsonPlaceholderService {

  APIKey : string = "&appid=15090a6be2dee785f8349ccde5ffe2c0";
  CurrentWeatherURL : string = "http://api.openweathermap.org/data/2.5/find?q="
  FiveDaysWeatherURL: string = "http://api.openweathermap.org/data/2.5/forecast?q="


  constructor(private readonly httpClient: HttpClient) {

  }

  getFiveDaysWeatherByCity(city:string) {
    return this.httpClient.get<any>([this.FiveDaysWeatherURL + city + '&units=metric' + this.APIKey]
      .join('')).pipe(map(res=>res.list));
  }

  getCurrentWeatherByCity(city:string) {
    return this.httpClient.get<any>([this.CurrentWeatherURL + city + '&units=metric' + this.APIKey]
      .join('')).pipe(map(res=>res.list));
  }


}
