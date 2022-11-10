import { ClientModel } from './client.model';

export interface IOptions {
  normalizationFn: (client: ClientModel) => INormalizedClientForTable;
}

export type INormalizedClientForTable = {
  name: string;
  amount: ClientModel['amount'];
}

export type ClientVariant = ClientModel | INormalizedClientForTable;
type ClientValues = ClientModel[keyof Omit<ClientModel, 'name'>];
export type ReducedClient = Record<ClientValues, ClientVariant[]>;

