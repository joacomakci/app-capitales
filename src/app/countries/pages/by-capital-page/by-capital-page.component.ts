import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
    `
      .loader {
        width: 48px;
        height: 48px;
        border: 3px dotted #fff;
        border-style: solid solid dotted dotted;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        animation: rotation 2s linear infinite;
      }
      .loader::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        border: 3px dotted #ff3d00;
        border-style: solid solid dotted;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        animation: rotationBack 1s linear infinite;
        transform-origin: center center;
      }

      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      @keyframes rotationBack {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(-360deg);
        }
      }
    `,
  ],
})
export class ByCapitalPageComponent {
  loading: boolean = false;

  public countries: Country[] = [];

  constructor(private countriesServices: CountriesService) {}

  searchByCapital(term: string): void {
    this.loading = true;

    this.countriesServices.searchCapital(term).subscribe((countries) => {
      this.loading = false;
      this.countries = countries;
    });
  }
}
