import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'shared-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  @ViewChild('modalDetail', {static: false}) modal: ElementRef;
  dataCountry: any;
  constructor() { }

  ngOnInit(): void {
  }

  public open(data: object) {
    this.dataCountry = data;
    this.modal.nativeElement.style.display = 'flex';
  }

  public close(){
    this.modal.nativeElement.style.display = 'none';
  }

  public changeFavorite() {
    if (this.dataCountry.favorite) {
      this.dataCountry.favorite = 0;
    } else {
      this.dataCountry.favorite = 1;
    }
  }

}
