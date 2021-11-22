import newCustomerInput from '@src/dtos/new-customer-input';
import IncludeCustomer from '@src/services/include-customer';

describe('Custome Creator Service', () => {
  it('Create new Costumer', async () => {
    const input = new newCustomerInput({
      name: 'John Doe',
      document: '123.456.789-0',
      birthDate: new Date('1990-01-01T00:00:00'),
      address: '7th Avenue',
      city: 'Curitiba',
      state: 'Parana',
      zipCode: '85500-000',
      password: '123456',
    });

    const includeCustomer = new IncludeCustomer();

    const customer = await includeCustomer.execute(input);

    expect(customer).toEqual(
      expect.objectContaining({
        id: expect.any(String),
      })
    );
  });
});
