import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { switchMap } from 'rxjs';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {
  @Input()
  public country: Country | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({ id }) => this.countriesService.searchCountryByCode(id))
    )
    .subscribe(
      country => this.country = country
    );
  }
}
