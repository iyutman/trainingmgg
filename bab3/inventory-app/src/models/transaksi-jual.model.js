// transaksi-jual-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const transaksiJual = new Schema({
    transjualNo: { type: String, required: true },
    pembeliId: String,
    userId: {type: Schema.Types.ObjectId, ref: 'users'},
    pembeliMember: Boolean,
    totaljmlhBarang: Number,
    totalhargaBarang: Number,
    transjualNote: String,
    transjualDetail:[
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

  return mongooseClient.model('transaksiJual', transaksiJual);
};
