describe('Trasaction functional tests', () => {
  it('should get a balance', async() =>{
    const { body, status } = await global.testRequest.get('/transactions/balance');
    expect(status).toBe(200);
    expect(body.balance).toBe(100);
  });
});
