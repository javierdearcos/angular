import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  constructor(private countriesService: CountriesService) {}

  @Input()
  public countries: Country[] = [];

  searchByRegion(region: string): void {
    this.countriesService
      .searchCountryByRegion(region)
      .subscribe((countries) => (this.countries = countries));
  }
}
