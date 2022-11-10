import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { ClientModel } from 'src/app/typings/client.model';

@Component({
  selector: 'app-home',
  templateUrl: './navigator.component.html',
})
export class NavigatorComponent implements OnInit {
  public clients: ClientModel[] = [];

  constructor(private clientService: ClientsService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((clients) => {
      this.clients = clients;
    });
  }
}
