import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  constructor(private countriesService: CountriesService) {}

  public countries: Country[] = [];

  searchByCapital(capital: string): void {
    this.countriesService
      .searchCountryByCapital(capital)
      .subscribe((countries) => (this.countries = countries));
  }
}
