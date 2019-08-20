// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    const { app, method, result, params } = context;
    // const transaksiBeli = await app.service('transaksi-beli');
    // const barang = app.service('barang');
    const barang = app.services.barang.Model;

    const barangFor = result.transbeliDetail;
    barangFor.forEach(function(element) {
	    barang.findById( element.barangId, function (err, docs) {
		    if(element.jmlhBarang && docs){
		    	docs.stock = element.jmlhBarang + docs.stock;
		    	docs.save();
		    }
	    });
    });
	
    return context;
  };
};
