// transaksi-beli-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const transaksiBeli = new Schema({
    transbeliNo: { type: String, required: true },
    penjual: String,
	    userId: {type: Schema.Types.ObjectId, ref: 'users'},
    transbeliNote: String,
    totaljmlhBarang: Number,
    totalhargaBarang: Number,
    transbeliDetail:[
      {
        barangId: {type: Schema.Types.ObjectId, ref: 'barang'},
        hargaBarang: Number,
        jmlhBarang: Number,
        totaldetailBarang: Number,
      }
    ]
  }, {
    timestamps: true
  });

  return mongooseClient.model('transaksiBeli', transaksiBeli);
};
