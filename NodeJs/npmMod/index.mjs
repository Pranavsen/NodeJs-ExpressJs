import  chalk from 'chalk';
import validator from 'validator';

// console.log(chalk.green.underline.inverse("Success"));

const res1 = validator.isEmail('Pranav@sencom');
const res = validator.isEmail('Pranav@sen.com');
console.log(res1 ? chalk.green.inverse(res1) : chalk.red.inverse(res1));
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

// run command => nodemon index.mjs