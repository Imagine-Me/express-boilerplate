import supertest from 'supertest';
import app from './app'

const requestWithSuperTest = supertest(app);
describe('test main route', () => {
  it('should return HELLO WORLD', async () => {
    const result = await requestWithSuperTest.get('/');
    expect(result.status).toEqual(200);
    expect(result.text).toEqual('HELLO WORLD');
  });
});
