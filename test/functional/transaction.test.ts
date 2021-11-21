import supertest from 'supertest';

describe('Trasaction functional tests', () => {
  it('should make a debit transaction', async() =>{
    const { body, status } = await supertest(app).get('/transaction');
    expect(status).toBe(200);
    expect(body.balance).toBe(100);
  });
});
