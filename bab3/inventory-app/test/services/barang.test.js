const assert = require('assert');
const app = require('../../src/app');

describe('\'barang\' service', () => {
  it('registered the service', () => {
    const service = app.service('barang');

    assert.ok(service, 'Registered the service');
  });
});
