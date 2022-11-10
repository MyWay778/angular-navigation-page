import { Component, OnInit } from '@angular/core';
import { delay, tap } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';
import { AlertState } from 'src/app/typings/alert-service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {
  public message = '';
  public isShown = false;
  public state: AlertState = 'error';

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService
      .getAlertState()
      .pipe(
        tap((state) => {
          this.message = state.message;
          this.state = state.state;
          this.isShown = true;
        }),
        delay(3000),
        tap(() => {
          this.isShown = false;
        })
      )
      .subscribe();
  }
}
