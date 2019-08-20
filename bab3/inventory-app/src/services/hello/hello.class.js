/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    // console.info('find');
    // console.log(params);
    // console.error('###################');
    return [];
  }

  async get (id, params) {
    // console.info('get');
    // console.log(id);
    // console.log(params);
    // console.error('###################');
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    // console.info('create');
    // console.log(data);
    // console.log(params);
    // console.error('###################');
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update (id, data, params) {
    // console.info('update');
    // console.log(id);
    // console.log(data);
    // console.log(params);
    // console.error('###################');
    return data;
  }

  async patch (id, data, params) {
    // console.info('patch');
    // console.log(id);
    // console.log(data);
    // console.log(params);
    // console.error('###################');
    return data;
  }

  async remove (id, params) {
    // console.info('remove');
    // console.log(id);
    // console.log(params);
    // console.error('###################');
    return { id };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
