import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  constructor(private httpClient: HttpClient) {}

  private restCountriesApiUrl = 'https://restcountries.com/v3.1';

  searchCountryByCode(code: string): Observable<Country | null> {
    return this.httpClient
      .get<Country[]>(`${this.restCountriesApiUrl}/alpha/${code}`)
      .pipe(
        map(countries => countries[0]),
        catchError((error) => {
          console.log(error);
          return of(null);
        })
      );
  }


  searchCountryByName(country: string): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(`${this.restCountriesApiUrl}/name/${country}`)
      .pipe(
        catchError((error) => {
          console.log(error);
          return of([]);
        })
      );
  }

  searchCountryByCapital(capital: string): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(`${this.restCountriesApiUrl}/capital/${capital}`)
      .pipe(
        catchError((error) => {
          console.log(error);
          return of([]);
        })
      );
  }

  searchCountryByRegion(region: string): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(`${this.restCountriesApiUrl}/region/${region}`)
      .pipe(
        catchError((error) => {
          console.log(error);
          return of([]);
        })
      );
  }
}
