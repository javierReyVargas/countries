import {Component, Input, OnInit} from '@angular/core';
import {ToolbarService} from '../../services/toolbar.service';

@Component({
  selector: 'shared-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  @Input() region: [] = [];
  textSearched: string;
  constructor(private searchChangeService: ToolbarService) { }

  ngOnInit(): void {
    this.searchChangeService.changeTextSearch.subscribe(
      strText => {
        this.textSearched = strText;
      }
    );
  }

}
