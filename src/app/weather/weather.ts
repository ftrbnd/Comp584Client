import { HttpClient } from '@angular/common/http';
import { Component, input } from '@angular/core';
import { WeatherData } from '../weather-data';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-weather',
  imports: [MatTableModule],
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})
export class Weather {
  forecasts: WeatherData[] = [];

  constructor(http: HttpClient) {
    http.get<WeatherData[]>('http://localhost:5153/weatherforecast').subscribe(result => {
      console.log(result)
      this.forecasts = result;
    })
  }
}