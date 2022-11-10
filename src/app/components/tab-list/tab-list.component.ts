import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IClientTableTab } from 'src/app/typings/client-table-tab';

@Component({
  selector: 'app-tab-list',
  styleUrls: ['./tab-list.component.scss'],
  templateUrl: './tab-list.component.html',
})
export class TabListComponent {
  @Input() tabs: IClientTableTab[] = [];
  @Input() activeTab: string = '';

  @Output() tabClick = new EventEmitter<string>();

  constructor() {}

  handleTabClick(tab: string) {
    this.tabClick.emit(tab);
  }
}
