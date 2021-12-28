import supertest from 'supertest';
import server from './index';

const requestWithSuperTest = supertest(server);

describe('test main route', () => {
  afterAll((done) => {
    server.close();
    done();
  });
  it('should return HELLO WORLD', async () => {
    const result = await requestWithSuperTest.get('/');
    expect(result.status).toEqual(200);
    expect(result.text).toEqual('HELLO WORLD');
  });
});
