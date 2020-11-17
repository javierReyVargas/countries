import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.api;
  }

  getData() {
    return this.http.get(`${this.url}`).pipe(
      map((allData: Array<any>) => {

        const data = {
          africa: [],
          america: [],
          asia: [],
          europa: [],
          oceania: [],
          polar: [],
          withoutRegion: []
        };

        for (let i = 0; i <= (allData.length - 1) ; i++) {
          allData[i]['favorite'] = 0;
          switch (allData[i].region) {
            case 'Africa':
              data.africa.push(allData[i]);
              break;
            case 'Americas':
              data.america.push(allData[i]);
              break;
            case 'Asia':
              data.asia.push(allData[i]);
              break;
            case 'Europe':
              data.europa.push(allData[i]);
              break;
            case 'Oceania':
              data.oceania.push(allData[i]);
              break;
            case 'Polar':
              data.polar.push(allData[i]);
              break;
            default:
              data.withoutRegion.push(allData[i]);
              break;
          }
        }
        return [
          {
            name: 'Africa',
            countries: data.africa
          },
          {
            name: 'America',
            countries: data.america
          },
          {
            name: 'Asia',
            countries: data.asia
          },
          {
            name: 'Europa',
            countries: data.europa
          },
          {
            name: 'Oceania',
            countries: data.oceania
          },
          {
            name: 'Polar',
            countries: data.polar
          },
          {
            name: 'Without region',
            countries: data.withoutRegion
          }
        ];
      })
    );
  }


  private findCountries(allCountries: any, code: string, name: string) {
    let low = 0;
    let high = allCountries.length - 1;

    while (low <= high) {
      let middle = Math.floor((low + high) / 2);
      let guess = allCountries[middle];

      if (guess.alpha3Code === code) {
        return guess.name;
      }

      if (guess.alpha3Code > code) {
        high = middle - 1;
      } else {
        low = middle + 1;
      }
    }

    return -1;
  }

}
