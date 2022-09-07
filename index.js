
var readlineSync = require('readline-sync');

var userAns = readlineSync.question("what is your name?");

console.log(" ");

var welcomeUser = 'welcome ' + userAns;

console.log(welcomeUser);
console.log(" ");


function ShowMesaage() {
  var userAnswer = Number(readlineSync.question("enter your birth year to know wether it's a leap year or not : "));

  console.log("  ");

  if (userAnswer == "") {
    console.log("please enter your birth year....");
  }
  else {

    isLeapYear(userAnswer);
  }
}


function isLeapYear(userAnswer) {

  if (userAnswer % 400 == 0) {
    console.log("wowww..!! your birth year is a leap year.");
  }
  else if (userAnswer % 100 == 0) {
    console.log("ooh.!! your birth year is not a leap year.");
  }
  else if (userAnswer % 4 == 0) {
    console.log("wowww..!! your birth year is a leap year.");
  }
  else {
    console.log("ooh.!! your birth year is not a leap year.");
  }

}

ShowMesaage();
