import { Component, OnInit } from '@angular/core';
import {ToolbarService} from '../../services/toolbar.service';

@Component({
  selector: 'shared-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private toolbarService: ToolbarService) { }

  ngOnInit(): void {
  }


  public changeText(eventData: any) {
    this.toolbarService.searchText(eventData.target.value);
  }

}
