export interface IAlertState {
  message: string;
  state: AlertState;
}

export type AlertState = 'error' | 'success';