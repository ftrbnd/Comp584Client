import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { CityData } from './city-data';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-city',
  imports: [AsyncPipe],
  templateUrl: './city.html',
  styleUrl: './city.scss',
})
export class City {
  cities$: Observable<CityData[]>;

  constructor(http: HttpClient) {
    this.cities$ = http.get<CityData[]>(`${environment.apiUrl}/api/cities`);
  }
}
