// customer-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const customer = new Schema({
    nameCustomer: { type: String, required: true },
    kode: String
  }, {
    timestamps: true
  });

  return mongooseClient.model('customer', customer);
};
