
//#### No.1
// # collection USER
	{
		_id: USER_ID
		name: NAME_OF_USER,
		profil: PROFIL_OF_USER,
		setting: SETTING_OF_USER,
		userCreated: DATE_TIME,
		kehadiran: [
			{
				dateKehadiran: DATE,
				kehadiranCreated: DATE_TIME
			}
		],
		lembur: [
			{
				dateLembur: DATE,
				startLembur: TIME,
				endLembur: TIME,
				lemburCreated: DATE_TIME
			}
		],
		transGaji: [
			{
				monthTransgaji: MONTH,
				totalLembur: TOTAL_LEMBUR,
				totalKehadiran: TOTAL_KEHADIRAN,
				total: TOTAL_LEMBUR_KEHADIRAN
			}
		]
	}

 
///////////////////////////////////////////////////////////////////////////
//  ############################## Query insert #######################  //
///////////////////////////////////////////////////////////////////////////

	db.user.insertMany([
		{ name: "Name_1", profil: "/public/img/name-1.jpg", setting: 10000, userCreated: ISODate("2019-08-10T00:31:47.175Z"), kehadiran: [
		        { dateKehadiran: "2019-08-10", flag: 1, kehadiranCreated: ISODate("2019-08-10T00:31:47.175Z") },
		        { dateKehadiran: "2019-07-11", flag: 0, kehadiranCreated: ISODate("2019-08-11T00:31:47.175Z") },
		        { dateKehadiran: "2019-08-12", flag: 1, kehadiranCreated: ISODate("2019-08-12T00:31:47.175Z") },
		        { dateKehadiran: "2019-08-13", flag: 1, kehadiranCreated: ISODate("2019-08-13T00:31:47.175Z") },
		        { dateKehadiran: "2019-08-14", flag: 1, kehadiranCreated: ISODate("2019-08-14T00:31:47.175Z") }
		    ], lembur: [
		        { dateLembur: "2019-08-11", startLembur: ISODate("2019-08-11T17:35:47.175Z"), endLembur: ISODate("2019-08-11T18:35:47.175Z"), lemburCreated: ISODate("2019-08-11T00:31:47.175Z") },
		        { dateLembur: "2019-07-12", startLembur: ISODate("2019-08-12T17:35:47.175Z"), endLembur: ISODate("2019-08-12T19:35:47.175Z"), lemburCreated: ISODate("2019-08-12T00:31:47.175Z") }
		    ],
		    transGaji: [ ]
		}, { name: "Name_2", profil: "/public/img/name-2.jpg", setting: 10000, userCreated: ISODate("2019-08-10T00:31:47.175Z"), kehadiran: [
		        { dateKehadiran: "2019-08-10", flag: 1, kehadiranCreated: ISODate("2019-08-10T00:31:47.175Z") },
		        { dateKehadiran: "2019-08-11", flag: 1, kehadiranCreated: ISODate("2019-08-11T00:31:47.175Z") },
		        { dateKehadiran: "2019-08-12", flag: 0, kehadiranCreated: ISODate("2019-08-12T00:31:47.175Z") },
		        { dateKehadiran: "2019-08-13", flag: 1, kehadiranCreated: ISODate("2019-08-13T00:31:47.175Z") },
		        { dateKehadiran: "2019-08-14", flag: 1, kehadiranCreated: ISODate("2019-08-14T00:31:47.175Z") }
		    ], lembur: [ ],
		    transGaji: [ ]
		}, { name: "Name_3", profil: "/public/img/name-3.jpg", setting: 20000, userCreated: ISODate("2019-08-10T00:31:47.175Z"), kehadiran: [
		        { dateKehadiran: "2019-08-10", flag: 1, kehadiranCreated: ISODate("2019-08-10T00:31:47.175Z") },
		        { dateKehadiran: "2019-08-11", flag: 1, kehadiranCreated: ISODate("2019-08-11T00:31:47.175Z") },
		        { dateKehadiran: "2019-08-12", flag: 0, kehadiranCreated: ISODate("2019-08-12T00:31:47.175Z") },
		        { dateKehadiran: "2019-08-13", flag: 0, kehadiranCreated: ISODate("2019-08-13T00:31:47.175Z") },
		        { dateKehadiran: "2019-08-14", flag: 1, kehadiranCreated: ISODate("2019-08-14T00:31:47.175Z") }
		    ], lembur: [
		        { dateLembur: "2019-08-12", startLembur: ISODate("2019-08-12T17:35:47.175Z"), endLembur: ISODate("2019-08-12T23:35:47.175Z"), lemburCreated: ISODate("2019-08-12T00:31:47.175Z") }
		    ],
		    transGaji: [ ]
		}, { name: "Name_4", profil: "/public/img/name-4.jpg", setting: 10000, userCreated: ISODate("2019-08-10T00:31:47.175Z"), kehadiran: [
		        { dateKehadiran: "2019-08-10", flag: 1, kehadiranCreated: ISODate("2019-08-10T00:31:47.175Z") },
		        { dateKehadiran: "2019-08-11", flag: 1, kehadiranCreated: ISODate("2019-08-11T00:31:47.175Z") },
		        { dateKehadiran: "2019-08-12", flag: 1, kehadiranCreated: ISODate("2019-08-12T00:31:47.175Z") },
		        { dateKehadiran: "2019-08-13", flag: 1, kehadiranCreated: ISODate("2019-08-13T00:31:47.175Z") },
		        { dateKehadiran: "2019-08-14", flag: 1, kehadiranCreated: ISODate("2019-08-14T00:31:47.175Z") }
		    ], lembur: [ ],
		    transGaji: [ ]
		}, { name: "Name_5", profil: "/public/img/name-5.jpg", setting: 10000, userCreated: ISODate("2019-08-10T00:31:47.175Z"), kehadiran: [
		        { dateKehadiran: "2019-08-10", flag: 1, kehadiranCreated: ISODate("2019-08-10T00:31:47.175Z") },
		        { dateKehadiran: "2019-08-11", flag: 1, kehadiranCreated: ISODate("2019-08-11T00:31:47.175Z") },
		        { dateKehadiran: "2019-08-12", flag: 1, kehadiranCreated: ISODate("2019-08-12T00:31:47.175Z") },
		        { dateKehadiran: "2019-08-13", flag: 1, kehadiranCreated: ISODate("2019-08-13T00:31:47.175Z") },
		        { dateKehadiran: "2019-08-14", flag: 1, kehadiranCreated: ISODate("2019-08-14T00:31:47.175Z") }
		    ], lembur: [ ],
		    transGaji: [ ]
		} 
	])
	//{ monthTransgaji: MONTH, totalLembur: TOTAL_LEMBUR, totalKehadiran: TOTAL_KEHADIRAN, total: TOTAL_LEMBUR_KEHADIRAN }
//  ############################## .end Query insert #######################  //
 

//#### No.2
// / 
	db.user.aggregate([
		{ $unwind: "$kehadiran" },
		{ $project: 
			{
			  	nama: "$name",
				kehadiranFlag: "$kehadiran.flag",
				detailTgltdkHadir: {
					tglTdkhadir: "$kehadiran.dateKehadiran",
				},
				monthKehadiran: { $toString: { $month: { $toDate : "$kehadiran.dateKehadiran" } } },
				monthNow: { $toString: { $month: new Date() } },
				checkMonth: { $eq: [ { $toString: { $month: { $toDate : "$kehadiran.dateKehadiran" } } },  { $toString: { $month: new Date() } } ] }
			}
		}, 
		{ $match: { "kehadiranFlag": 0, "checkMonth": true} },	
		{ $group: { _id: "$nama", jml_tdkhadir: {$sum: 1 }, tgl_tdkhadir: { $push: "$detailTgltdkHadir" } } }
	])

// #### No.3
// 
	db.user.aggregate([
		{ $unwind: "$lembur" },
		{ $project: 
			{
			  	nama: "$name",
				detailLembur:{
					dateLemburDetail: "$lembur.dateLembur",
					durationLemburDetail: {$divide: [{$subtract: ["$lembur.endLembur", "$lembur.startLembur"]}, 3600000]},
					totalIntensifDetail:{ $cond: [ { $lt: [{$divide: [{$subtract: ["$lembur.endLembur", "$lembur.startLembur"]}, 3600000]}, 5 ] }, { $multiply: [ {$divide: [{$subtract: ["$lembur.endLembur", "$lembur.startLembur"]}, 3600000]}, 20000]}, { $multiply: [ {$divide: [{$subtract: ["$lembur.endLembur", "$lembur.startLembur"]}, 3600000]}, 50000]} ] },
					// totalIntensifDetail:{ $cond: [ { $lt: [{$divide: [{$subtract: ["$lembur.endLembur", "$lembur.startLembur"]}, 3600000]}, 5 ] }, { $multiply: [ {$divide: [{$subtract: ["$lembur.endLembur", "$lembur.startLembur"]}, 3600000]}, 20000]}, { $multiply: [ {$divide: [{$subtract: ["$lembur.endLembur", "$lembur.startLembur"]}, 3600000]}, 50000]} ] },
					// optIntensif:{ $lt: [{$divide: [{$subtract: ["$lembur.endLembur", "$lembur.startLembur"]}, 3600000]}, 5 ]},
				},
				checkMonth: { $eq: [ { $toString: { $month: { $toDate : "$lembur.dateLembur" } } },  { $toString: { $month: new Date() } } ] }
			}
		},
		// { $match: { "kehadiranFlag": 0, "checkMonth": true} },	
		{ $group: { _id: "$nama", total_Duration:  {$sum: "$detailLembur.durationLemburDetail" }, total_intensif:  {$sum: "$detailLembur.totalIntensifDetail" }, detail_lembur: { $push: "$detailLembur" } } } 
	])
