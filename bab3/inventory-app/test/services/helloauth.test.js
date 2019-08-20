const assert = require('assert');
const app = require('../../src/app');

describe('\'helloauth\' service', () => {
  it('registered the service', () => {
    const service = app.service('helloauth');

    assert.ok(service, 'Registered the service');
  });
});
