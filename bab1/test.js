// No.1 
const satu = () => {
  const testOne = "tada";
  console.log(testOne);
  console.log("############### end No.1 \n");
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
    const ext = fileName.substr(fileName.lastIndexOf('.') + 1);
    console.log(ext);
    console.log("############### end No.2 \n");
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
  
  const bil1 = 1;
  const bil2 = 2;
  let resultBil = bil1 + bil2;

  console.log("Bil 1 : " + bil1 + "\nBil 2 : " + bil2);

  if (bil1 == bil2) {
    console.log(resultBil);
  } else {
    resultBil *= 3;
    console.log("Result * 3 = " + resultBil);
  }
  console.log("############### end No.3 \n");
}

//  No.4
const empat = () => {
  /*
  Result :
  Hari ini adalah: Selasa.
  Waktu sekarang adalah: 22:00: 30: 38
   */
  
  const today = new Date();
  const day = new Array('Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu');
  const dayOfWeek = day[today.getDay()];

  const hours = today.getHours();
  const minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
  const second = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();

  const time = hours + ':' + minutes + ':' + second;

  console.log('Hari ini adalah: ' + dayOfWeek);
  console.log("aktu sekarang adalah: " + time);
  
  console.log("############### end No.4 \n");
}

//  No.5
const lima = () => {
  const today = new Date();

  const dd = today.getDate()
  const mm = today.getMonth() + 1
  const yyyy = today.getFullYear()

  // console.log( dd + "/" + mm + "/" + yyyy);
  console.log(`${dd}/${mm}/${yyyy}`);
  console.log("############### end No.5 \n");
}

//  No.6
const enam = () => {
  /* 
  Parm :
  [{ name: "Brendan Eich" }, { name: "Rasmus Lerdorf" }]
  Result :
  [{ name: "Brendan Eich", companyName: "MGG" }, {name: "Rasmus Lerdorf", companyName: "MGG" }]
   */
  
  const parm = [
    { name: "Brendan Eich" }, 
    { name: "Rasmus Lerdorf" }
  ];

  /*
  parm.map(function(element) {
    element['companyName'] = 'MGG'; 
  });
   */

  parm.map( (element) =>  {
    element['companyName'] = 'MGG'; 
  });

  console.log( parm );
  console.log("############### end No.6 \n");
}

satu();
dua();
tiga();
empat();
lima();
enam();