import { Component, OnInit } from '@angular/core';
import { ClientsService } from './services/clients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(private clientService: ClientsService) {}

  ngOnInit() {
    this.clientService.fetchClients();
  }
}
