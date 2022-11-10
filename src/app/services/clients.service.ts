import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  delay,
  finalize,
  Observable,
  of,
  tap,
} from 'rxjs';
import { ClientResponse } from '../typings/client.response';
import { ClientModel } from '../typings/client.model';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private url = 'assets/data/list.json';
  private clients: BehaviorSubject<ClientModel[]> = new BehaviorSubject<
    ClientModel[]
  >([]);
  private total: number = 0;
  private isLoading = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private alertService: AlertService) {}

  fetchClients(): void {
    this.isLoading.next(true);

    this.http
      .get<ClientResponse>(this.url)
      .pipe(
        delay(500),
        tap((response) => {
          this.clients.next(response.data);
          this.total = response.total;
        }),
        catchError((error: HttpErrorResponse): Observable<ClientResponse> => {
          this.alertService.handleError(error);
          return of({} as ClientResponse);
        }),
        finalize(() => {
          this.isLoading.next(false);
        })
      )
      .subscribe();
  }

  getClients(): BehaviorSubject<ClientModel[]> {
    return this.clients;
  }

  getTotal(): number {
    return this.total;
  }

  getLoading(): BehaviorSubject<boolean> {
    return this.isLoading;
  }
}
