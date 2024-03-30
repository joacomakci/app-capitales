import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    const countries = this.http
      .get<Country[]>(url)
      .pipe(catchError(() => of([])));
    return countries;
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    const countries = this.http
      .get<Country[]>(url)
      .pipe(catchError(() => of([])));
    return countries;
  }

  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`;
    const countries = this.http
      .get<Country[]>(url)
      .pipe(catchError(() => of([])));
    return countries;
  }
}
