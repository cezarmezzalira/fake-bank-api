import NewCustomerInput from '@src/dtos/new-customer-input';
import Customer from '@src/entities/customer';
import PgPromiseDatabase from '@src/infra/pg-promise-database';
import CustomerRepositoryPG from '@src/repositories/customer';
import CustomerRepository from '@src/repositories/interfaces/customer';

export default class IncludeCustomer {
  customerRepository: CustomerRepository;
  constructor() {
    this.customerRepository = new CustomerRepositoryPG(
      PgPromiseDatabase.getInstance()
    );
  }

  async execute(input: NewCustomerInput) {
    const customer = new Customer({
      name: input.name,
      document: input.document,
      birthDate: input.birthDate,
      address: input.address,
      city: input.city,
      state: input.state,
      zipCode: input.zipCode,
      password: input.password,
    });

    const id = await this.customerRepository.save(customer);

    return { id };
  }
}
