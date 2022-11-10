import { ClientModel } from './client.model';

export interface ClientResponse {
  total: number;
  data: ClientModel[];
}