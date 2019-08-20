// Initializes the `barang` service on path `/barang`
const createService = require('feathers-mongoose');
const createModel = require('../../models/barang.model');
const hooks = require('./barang.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/barang', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('barang');

  service.hooks(hooks);
};
