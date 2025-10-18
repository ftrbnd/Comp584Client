import { CountryData } from '../country/country-data';

export interface CountryPopulationData extends CountryData {
  population: number;
}
