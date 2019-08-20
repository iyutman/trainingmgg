// ################
// # collection USER
	{
		_id: USER_ID
		nameUser: NAME_OF_USER,
		profil: PIC_PROFIL_OF_USER,
		email: EMAIL_OF_USER,
		password: PASSWORD_OF_USER,
		noteUser: NOTE_OF_USER,
		userCreated: DATE_TIME
	}

// # collection BARANG
	{
		_id: USER_ID
		nameBarang: NAME_OF_BARANG,
		kode: BARCODE_OF_BARANG,
		category: CATEGORY_OF_BARANG,
		hargaBeli: HARGA_BELI_OF_BARANG,
		hargaJual: HARGA_JUAL_OF_BARANG,
		stock: STOCK_OF_BARANG,
		descBarang: DESCRIPSI_OF_BARANG,
		barangCreated: DATE_TIME
	}

// # collection CUSTOMER
	{
		_id: USER_ID
		nameCustomer: NAME_OF_CUSTOMER,
		kode: BARCODE_OF_CUSTOMER,
		customerCreated: DATE_TIME
	}

// # collection TRANSAKSI JUAL
	{
		_id: TRANSAKSI_JUAL_ID
		transjualNo: NO_OF_TRANS_JUAL,
		transjualCreated: DATE_TIME,
		pembeliId: ID_PEMBELI_OF_TRANS_JUAL,
		userId: ID_USER,
		pembeliMember: MEMBER_PEMBELI_OF_TRANS_JUAL,
		totaljmlhBarang: TOTAL_BARANG_OF_TRANS_JUAL,
		totalhargaBarang: TOTAL_HARGA_OF_TRANS_JUAL,
		transjualNote: NOTE_OF_TRANS_JUAL,
		transjualDetail:[
			{
				barangId: ID_BARANG_OF_DETAIL_TRANS_JUAL,
				hargaBarang: HARGA_BARANG_OF_DETAIL_TRANS_JUAL,
				jmlhBarang: JMLH_BARANG_OF_DETAIL_TRANS_JUAL,
				totaldetailBarang: TOTALHARGA_OF_DETAIL_TRANS_JUAL,
			}
		]
	}

	// # collection TRANSAKSI BELI
	{
		_id: TRANSAKSI_BELI_ID
		userId: ID_USER,
		transbeliNo: NO_OF_TRANS_BELI,
		transbeliCreated: DATE_TIME,
		penjual: STRING_PENJUAL,
		transbeliNote: NOTE_OF_TRANS_BELI,
		totaljmlhBarang: TOTAL_BARANG_OF_TRANS_BELI,
		totalhargaBarang: TOTAL_HARGA_OF_TRANS_BELI,
		transbeliDetail:[
			{
				barangId: ID_BARANG_OF_DETAIL_TRANS_BELI,
				hargaBarang: HARGA_BARANG_OF_DETAIL_TRANS_BELI,
				jmlhBarang: JMLH_BARANG_OF_DETAIL_TRANS_BELI,
				totaldetailBarang: TOTALHARGA_OF_DETAIL_TRANS_BELI,
			}
		]
	}

// .end ################
// #####################


//////////////////////////////////////////////////////////////////////////
//  ############################## Query insert dummy #######################  //
///////////////////////////////////////////////////////////////////////////
db.createCollection("users");
db.createCollection("barang");
db.createCollection("customer");

db.users.insertMany([
	{ nameUser: NAME_OF_USER, profil: PIC_PROFIL_OF_USER, email: EMAIL_OF_USER, password: PASSWORD_OF_USER, noteUser: NOTE_OF_USER, userCreated: DATE_TIME, transJual : [
		{ transjualNo: NO_OF_TRANS_JUAL, transjualCreated: DATE_TIME, pembeliId: ID_PEMBELI_OF_TRANS_JUAL, pembeliMember: MEMBER_PEMBELI_OF_TRANS_JUAL, totaljmlhBarang: TOTAL_BARANG_OF_TRANS_JUAL, totalhargaBarang: TOTAL_HARGA_OF_TRANS_JUAL, transjualNote: NOTE_OF_TRANS_JUAL, transjualDetail:[
				{ barangId: ID_BARANG_OF_DETAIL_TRANS_JUAL, hargaBarang: HARGA_BARANG_OF_DETAIL_TRANS_JUAL, jmlhBarang: JMLH_BARANG_OF_DETAIL_TRANS_JUAL, totaldetailBarang: TOTALHARGA_OF_DETAIL_TRANS_JUAL }
			] }
	], transBeli : [
		{ transbeliNo: NO_OF_TRANS_BELI, transbeliCreated: DATE_TIME, penjual: STRING_PENJUAL, transbeliNote: NOTE_OF_TRANS_BELI, totaljmlhBarang: TOTAL_BARANG_OF_TRANS_BELI, totalhargaBarang: TOTAL_HARGA_OF_TRANS_BELI, transbeliDetail:[
				{ barangId: ID_BARANG_OF_DETAIL_TRANS_BELI, hargaBarang: HARGA_BARANG_OF_DETAIL_TRANS_BELI, jmlhBarang: JMLH_BARANG_OF_DETAIL_TRANS_BELI, totaldetailBarang: TOTALHARGA_OF_DETAIL_TRANS_BELI }
			] }
	] }
])


//  ############################## .end Query insert #######################  //