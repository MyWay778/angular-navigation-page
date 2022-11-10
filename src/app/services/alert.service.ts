import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IAlertState } from '../typings/alert-service';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertState = new Subject<IAlertState>();

  constructor() {}

  handleError(error: HttpErrorResponse) {
    console.warn(error.message);
    const newAlertState: IAlertState = {
      message: 'An error occurred, try refreshing the page...',
      state: 'error',
    };
    this.alertState.next(newAlertState);
  }

  handleSuccess() {
    const newAlertState: IAlertState = {
      message: 'Success!',
      state: 'success',
    };
    this.alertState.next(newAlertState);
  }

  getAlertState() {
    return this.alertState;
  }
}
