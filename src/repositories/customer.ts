import Customer from '@src/entities/customer';
import Database from '@src/infra/database/database';
import CustomerRepository from './interfaces/customer';

export default class CustomerRepositoryPG implements CustomerRepository {
  database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  async save(customer: Customer): Promise<string> {
    const customerData = await this.database.one(
      'insert into fakebank.customers (name, document, birth_date, address, city, state, zip_code, password) values ($1, $2, $3, $4, $5, $6, $7, $8) returning id',
      [
        customer.name,
        customer.document,
        customer.birthDate,
        customer.address,
        customer.city,
        customer.state,
        customer.zipCode,
        customer.password,
      ]
    );
    return customerData.id;
  }

  get(id: string): Promise<Customer> {
    throw new Error('Method not implemented.');
  }

  count(): Promise<number> {
    throw new Error('Method not implemented.');
  }

  clean(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
