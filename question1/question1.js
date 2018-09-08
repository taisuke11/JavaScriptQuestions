'use strict';
const getNumber = Number (prompt ('数字を入力してください。'));
let resultStr = '';
for (const value of Array.from ({length: getNumber}, (v, k) => k + 1)) {
  if (resultStr !== '') {
    resultStr += ', ';
  }
  if (value % 15 === 0) {
    resultStr += 'FizzBuzz';
  } else if (value % 5 === 0) {
    resultStr += 'Buzz';
  } else if (value % 3 === 0) {
    resultStr += 'Fizz';
  } else {
    resultStr += String (value);
  }
}
console.log (resultStr);
