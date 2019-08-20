// Initializes the `transaksi-jual` service on path `/transaksi-jual`
const createService = require('feathers-mongoose');
const createModel = require('../../models/transaksi-jual.model');
const hooks = require('./transaksi-jual.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/transaksi-jual', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('transaksi-jual');

  service.hooks(hooks);
};
