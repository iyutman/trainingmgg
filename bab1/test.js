// No.1 
const satu = () => {
	let testOne = "tada";
	console.log(testOne);
	console.log( " ############### end No.1 \n" );
}

//  No.2
const dua = () => {
	const fs = require('fs')
	const fileName = "E:\\Mgg Software\\training\\bab1\\getExtensi.pdf";

	fs.access(fileName, fs.F_OK, (err) => {
	  if (err) {
	    console.error(err)
	    return
	  }
	  //file exists
	  let ext = fileName.substr(fileName.lastIndexOf('.') + 1);
	  console.log(ext);
	  console.log( " ############### end No.2 \n" );
	})
}

//  No.3
const tiga = () => {
	/*
	let bil1 = null;
	let bil2 = null;
	// Get process.stdin as the standard input object.
	let standard_input = process.stdin;
	standard_input.setEncoding('utf-8');
	
	// Prompt user to input data in console.
	console.log("Please input text in command line.");
	standard_input.on('data', function (data) {
	    // User input exit.
	    if( bil1 == null ){
	    	bil1 = data
	    } else if ( bil2 == null ){
	    	bil2 = data
	    } else {
	        process.exit();
	    }
	});
    // Print user input in console.
    console.log(bil1);
    console.log(bil2);
	 */
	
	let bil1 = 1;
	let bil2 = 2;
	let resultBil = bil1 + bil2;

	console.log("Bil 1 : "+ bil1 +"\nBil 2 : "+ bil2);

	if (bil1 == bil2) {
	  console.log(resultBil);
	} else {
	  resultBil*=3;
	  console.log( " Result * 3 = "+resultBil);
	}
	console.log( " ############### end No.3 \n" );
}

//  No.4
const empat = () => {
	/*
		Result :
		Hari ini adalah: Selasa.
		Waktu sekarang adalah: 22:00: 30: 38
	 */
	
	let today = new Date();
	let day = new Array('Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu');
	let dayOfWeek = day[today.getDay()];

	let hours = today.getHours();
	let minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
	let second = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();

	let time = hours + ':' + minutes + ':' + second;

	console.log('Hari ini adalah: ' + dayOfWeek);
	console.log( "Waktu sekarang adalah: " + time);
	
	console.log( " ############### end No.4 \n" );
}

//  No.5
const lima = () => {
	let today = new Date();

	let dd = today.getDate()
	let mm = today.getMonth() + 1
	let yyyy = today.getFullYear()

	console.log( dd + "/" + mm + "/" + yyyy);
	console.log( " ############### end No.5 \n" );
}

//  No.6
const enam = () => {
	/* 
		Parm :
		[{ name: "Brendan Eich" }, { name: "Rasmus Lerdorf" }]
		Result :
		[{ name: "Brendan Eich", companyName: "MGG" }, {name: "Rasmus Lerdorf", companyName: "MGG" }]
	 */
	
	let parm = [
		{ name: "Brendan Eich" }, 
		{ name: "Rasmus Lerdorf" }
	];

	parm.forEach(function(element) {
		element['companyName'] = 'MGG'; 
	});

	console.log( parm );
	console.log( " ############### end No.6 \n" );
}

satu();
dua();
tiga();
empat();
lima();
enam();