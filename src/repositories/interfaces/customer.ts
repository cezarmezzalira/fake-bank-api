import Customer from '@src/entities/customer';

export default interface CustomerRepository {
  save(customer: Customer): Promise<string>;
  get(id: string): Promise<Customer>;
  count(): Promise<number>;
  clean(): Promise<void>;
}
