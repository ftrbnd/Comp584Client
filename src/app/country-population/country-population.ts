import { Component } from '@angular/core';
import { CountryPopulationData } from './country-population-data';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country-population',
  imports: [],
  templateUrl: './country-population.html',
  styleUrl: './country-population.scss',
})
export class CountryPopulation {
  country: CountryPopulationData | null = null;

  constructor(http: HttpClient) {
    http
      .get<CountryPopulationData>(`${environment.apiUrl}/api/countries/25/population`)
      .subscribe((result) => {
        console.log(result);
        this.country = result;
      });
  }
}
