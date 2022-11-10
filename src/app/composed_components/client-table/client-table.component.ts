import { Component, Input, OnInit } from '@angular/core';
import { IClientTableTab } from 'src/app/typings/client-table-tab';
import { ClientModel } from 'src/app/typings/client.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';
import {
  INormalizedClientForTable,
  IOptions,
  ReducedClient,
} from 'src/app/typings/client-table';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
})
export class ClientTableComponent implements OnInit {
  @Input() clients: ClientModel[] = [];

  public tabs: IClientTableTab[] = [
    { id: 0, title: 'income', key: 'income' },
    { id: 1, title: 'outcome', key: 'outcome' },
    { id: 2, title: 'loans', key: 'loan' },
    { id: 3, title: 'investments', key: 'investment' },
  ];
  public tableColumns = [
    { title: 'Name', key: 'name' },
    { title: 'Account', key: 'amount' },
  ];
  public activeTab: string = 'income';
  public clientsByType: ReducedClient = {};
  public isLoading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientsService
  ) {}

  ngOnInit(): void {
    const tabId = this.route.snapshot.queryParamMap.get('tab');
    const selectedTab = this.tabs[Number(tabId)];
    if (selectedTab) {
      this.activeTab = selectedTab.key;
    } else {
      this.router.navigate(['404']);
    }

    this.clientService.getLoading().subscribe((isLoading: boolean) => {
      this.isLoading = isLoading;
    });
  }

  ngOnChanges(): void {
    this.clientsByType = this.getClientsByProperty('type', this.clients, {
      normalizationFn: this.normalizeClientForTable,
    });
  }

  handleTabClick(newActiveTab: string) {
    this.activeTab = newActiveTab;
  }

  private getClientsByProperty(
    property: keyof ClientModel,
    clients: ClientModel[],
    { normalizationFn }: IOptions
  ) {
    return clients.reduce((types: ReducedClient, client: ClientModel) => {
      // The name property is an object and you don't need to process this property at the moment.
      if (property === 'name') return types;

      const propertyValue = client[property];
      if (!types[propertyValue]) {
        types[propertyValue] = [];
      }

      types[propertyValue].push(
        normalizationFn ? normalizationFn(client) : client
      );
      return types;
    }, {});
  }

  private normalizeClientForTable(
    client: ClientModel
  ): INormalizedClientForTable {
    return {
      name: `${client.name.first} ${client.name.last}`,
      amount: client.amount,
    };
  }
}
