const assert = require('assert');
const app = require('../../src/app');

describe('\'transaksi-jual\' service', () => {
  it('registered the service', () => {
    const service = app.service('transaksi-jual');

    assert.ok(service, 'Registered the service');
  });
});
