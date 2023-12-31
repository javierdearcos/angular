import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent {
  constructor(private countriesService: CountriesService) {}

  @Input()
  public countries: Country[] = [];

  searchByCountry(country: string): void {
    this.countriesService
      .searchCountryByName(country)
      .subscribe((countries) => (this.countries = countries));
  }
}
