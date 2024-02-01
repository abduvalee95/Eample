// calculate degan object yasab olib  va hisob degan modulemizni chaqiramiz
const moment = require('moment')

const calculate = require("./hisob") // manzilini korsatamiz

const a = calculate.ayrish(10,3) //
console.log(a)
const a1 = calculate.qoshish(10,3) //
console.log(a1)
const a2 = calculate.bolish(10,3) //
console.log(a2)
const a3 = calculate.kopaytir(7,3) //
console.log(a3)

// console.log(arguments); argumentsda qaerdan qidirayotgani va qaerdan olayotganini chiqarib beradi birinchi ./ larni istedi  ohirigacha izlab boraveradi  localdan izledi to global modullargacha
// global bu  npm install moment --global desa globalniy ustanovka qilib beradi desctopdan lyuboy projectan momentni ishlatsaboladi

class Account {
    // state
    #amount
    #account_id
    // constructor
    constructor (account_id, amount, name, currency = "$" ) {
        this.#account_id = account_id;
        this.#amount = amount;
        this.name = name;
        this.currency = currency;
    };

    tellMemyBallance() {
        console.log(`Sizning hisobingizda: ${this.#amount}` + this.currency +` mavjud`);
        return this.#amount;
    };

    withdrawMoney(amount) {
        if (this.#amount > amount ) {
            this.#amount -= amount; // ayrib yuboradi 
            console.log(`Sizning hisobingizdan: ${amount}${this.currency} echildi,   ${this.#amount}${this.currency} qoldi`);
        }else {
            console.log(`Sizning hisobingizda mablag etarli emas: ${this.#amount}${this.currency} bor`);
        }
    };

    makeDeposit(amount) {
        this.#amount += amount;
        console.log(`Sizning xisobingiz ${amount}${this.currency} ga toldirildi `);
        console.log(`Sizning xisobingiz jami ${this.#amount}${this.currency}`);
    };

    giveMeDetails() {
        console.log(`Salom ${this.name} sizning Id raqamingiz ${this.#account_id},va sizning xisobingizda ${this.#amount}${this.currency} mavjud `);
        console.log(`Sizning xisob raqamingiz:`,this.#account_id);
    };
    static tellMeAboutClass() {
        console.log('Bu class Accountlarni yasaydi');
    }
    static tellMeTime() { 
        console.log(`Xozirgi vaqt`,moment().format('HH:MM'));
    }
}
const time = Account.tellMeTime() // static classni shundoq chaqirib olamiz

module.exports = Account;

