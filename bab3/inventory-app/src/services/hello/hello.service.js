// Initializes the `hello` service on path `/hello`
// const createService = require('./hello.class.js');
const createService = require('feathers-mongoose');
const createModel = require('../../models/hello.model');
const hooks = require('./hello.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  // const { dump } = require('dumper.js');
  // dump(Model);
  app.use('/hello', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('hello');

  service.hooks(hooks);
};
