// *******    Module package EXTERNAL
/* let num = 0
const moment = require('moment');
setTimeout(() => {
    setInterval(() => {

   num ++;
const time = moment().format();
console.log(`hozirgi vaqt ${time}`);
 });
},500);
 */
// External modullarni tashqaridan install qilamiz " npm moment --save", 'npm i moment' shundoq install qivolamiz bizga kk modullarni https://www.npmjs.com/ shu stedan olamiz

/* const moment = require('moment')
const time = moment().format()
console.log(time)
// out 2024-01-28T13:27:59+09:00

setInterval(() =>{
    console.log(`hozirgi vaqt ${time}`)
},5000)
 */

// import inquirer from 'inquirer';
/* const inquirer = require('inquirer'); // terminal bilan input kiritish javoblardi tanlar shunaqa narsalarni korsatadi
   inquirer 
    .prompt([
        {type:input, name:'raqam', messege:'raqamni kiriting'}
    ])
    .then((answer)=> {
        console.log('Siz yozgan raqam',answer.raqam)
    })
    .catch((err) => console.log(err))
 */
const validator = require('validator'); // mail tekshiradion Module

// const test = validator.isEmail('jdas@ma.dge')
const test = validator.isInt('adf') // str ni qabul qiladi ichidegi int bolsa true str ichidegi str bolsa false
console.log(test)

const {v4: uuid }= require('uuid');
const random = uuid();
console.log(`Your uuid is ${random}`);

const chalk = require('chalk');
const log = console.log;

log(chalk.redBright(`my random uuid ${random}`) )