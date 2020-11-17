import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CountryDetailComponent} from '../country-detail/country-detail.component';

@Component({
  selector: 'shared-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  @Input() countryData: object;
  @ViewChild('modal', {static: false}) modal: CountryDetailComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openDetail(data: object) {
    this.modal.open(data);
  }

}
