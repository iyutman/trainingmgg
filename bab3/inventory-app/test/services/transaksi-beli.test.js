const assert = require('assert');
const app = require('../../src/app');

describe('\'transaksi-beli\' service', () => {
  it('registered the service', () => {
    const service = app.service('transaksi-beli');

    assert.ok(service, 'Registered the service');
  });
});
