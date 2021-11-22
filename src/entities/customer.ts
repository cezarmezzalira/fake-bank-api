export default class Customer {
  id?: string;
  name: string;
  document: string;
  birthDate: Date;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  password: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    name,
    document,
    birthDate,
    address,
    city,
    state,
    zipCode,
    password,
    active,
    createdAt,
    updatedAt,
  }: {
    id?: string;
    name: string;
    document: string;
    birthDate: Date;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    password: string;
    active?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = id || '';
    this.name = name;
    this.document = document;
    this.birthDate = birthDate;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.password = password;
    this.active = active || true;
    const actualDate = new Date();
    this.createdAt = createdAt || actualDate;
    this.updatedAt = updatedAt || actualDate;
  }
}
