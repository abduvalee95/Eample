// Core modullarni korish uchun terminaldi oziga "node" deb yozib tab tab bosilsa 
// node js ni ichiga ustanovka qilingan modullarni korishimiz mumkin
// Module Package Core
// 2 ta parametr oladi function va time sekunda yoziladi

setTimeout(function() {
    console.log("ishga tushdi") // 5 secdan keyn ishga tushadi
}, 5000) // 5 sekundan keyn  

// npm start

// set intervalda  sanash qiliamiz boshlangich variable berib olamiz
// har bir sec da qayta qayta ishga tuwurib beraveradi tezlashtirsayam boladi 
/* let num = 0;
setInterval(function() {
    console.log("boshladi",num)
    num ++ // 1,2,3,4,5,6,7 bolib sanab ketaveradi
}, 1000) // 1 sec dan sanab ketaveradi 
 */
// core packagelardi ustanovka  qilish shart emas "require" synatx ini ishlatamiz ichiga "fs" desak boldi


const fs = require('fs'); //shuni  ozi bizga filesystemni objectini qolga olib beradi
const data = fs.readFileSync('./input.txt', 'utf8');
console.log('Old Data\n',data);

fs.writeFileSync('./input.txt',`${data} \n\t\t By AbduvAli`); // \n-yangi satrga otdi \t tab tashladi 

// va manashu datani qaytib oqisin

const new_data = fs.readFileSync('./input.txt', 'utf8');
console.log("New Data \n",new_data);


