export default class NewCustomerInput {
  name: string;
  document: string;
  birthDate: Date;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  password: string;

  constructor({
    name,
    document,
    birthDate,
    address,
    city,
    state,
    zipCode,
    password,
  }: {
    name: string;
    document: string;
    birthDate: Date;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    password: string;
  }) {
    this.name = name;
    this.document = document;
    this.birthDate = birthDate;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.password = password;
  }
}
