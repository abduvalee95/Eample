
const Account = require("./account"); // require qilgan holatda hohlagan joyda iwlatishimiz mumkin faylimizda
console.log("'                               '")

Account.tellMeAboutClass();
// static classlarni objectlarsiz chaqirsaham bolaveradi
Account.tellMeTime();
//oddiy classlarga object berib
const myAccount = new Account(97512345,300,'Leo',);
myAccount.tellMemyBallance();
myAccount.giveMeDetails();
myAccount.withdrawMoney(400);
myAccount.makeDeposit(500);
Account.tellMeTime()


console.log("{")
console.log("'                               '")
console.log(" }")

const myAccount1 = new Account(154113897666,3050,'Ferbo','Euro');

myAccount1.tellMemyBallance();
myAccount1.giveMeDetails();
myAccount1.withdrawMoney(200);
myAccount1.makeDeposit(100);
Account.tellMeTime()

// keyn shundoq chaqiradi
