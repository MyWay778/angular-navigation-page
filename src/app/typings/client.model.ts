export interface ClientModel {
    _id: string;
    amount: number;
    type: string;
    name: ClientName;
    company: string,
    email: string,
    phone: string,
    address: string
}

export interface ClientName {
  first: string,
  last: string
}