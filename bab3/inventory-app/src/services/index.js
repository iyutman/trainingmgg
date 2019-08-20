const users = require('./users/users.service.js');
const hello = require('./hello/hello.service.js');
const barang = require('./barang/barang.service.js');
const customer = require('./customer/customer.service.js');
const transaksiJual = require('./transaksi-jual/transaksi-jual.service.js');
const transaksiBeli = require('./transaksi-beli/transaksi-beli.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(hello);
  app.configure(barang);
  app.configure(customer);
  app.configure(transaksiJual);
  app.configure(transaksiBeli);
};
