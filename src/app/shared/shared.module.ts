import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from './component/toolbar/toolbar.component';
import {RegionComponent} from './component/region/region.component';
import {CountryComponent} from './component/country/country.component';
import {CountryDetailComponent} from './component/country-detail/country-detail.component';
import { FilterByTextPipe } from './pipes/filter-by-text.pipe';


@NgModule({
  declarations: [
    ToolbarComponent,
    RegionComponent,
    CountryComponent,
    CountryDetailComponent,
    FilterByTextPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToolbarComponent,
    RegionComponent
  ]
})
export class SharedModule { }
