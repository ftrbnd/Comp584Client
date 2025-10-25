import { Component, OnInit } from '@angular/core';
import { CountryPopulationData } from './country-population-data';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-population',
  imports: [RouterLink],
  templateUrl: './country-population.html',
  styleUrl: './country-population.scss',
})
export class CountryPopulation implements OnInit {
  countryPopulation: CountryPopulationData | null = null;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const countryId = this.activatedRoute.snapshot.paramMap.get('id');

    this.http
      .get<CountryPopulationData>(`${environment.apiUrl}/api/countries/${countryId}/population`)
      .subscribe((result) => {
        console.log(result);
        this.countryPopulation = result;
      });
  }
}
