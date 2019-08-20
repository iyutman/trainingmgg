// barang-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const barang = new Schema({
    nameBarang: { type: String, required: true },
    kode: String,
    category: String,
    hargaBeli: Number,
    hargaJual: Number,
    stock: Number,
    descBarang: String,
  }, {
    timestamps: true
  });

  return mongooseClient.model('barang', barang);
};
