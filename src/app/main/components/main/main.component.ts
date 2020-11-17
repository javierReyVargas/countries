import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../services/country.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  allCountries: object;
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getData().subscribe(
      data => {
        this.allCountries = data;
      }
    );
  }

}
