'use strict';
let getString = prompt ('文字列を入力してください。');
getString = getString.replace (/\"/g, '');
let arrayOfString = getString.split (' ');
let hashArray = {};
for (const arrayStr of arrayOfString) {
  let isSameStr = false;
  if (0 === Object.keys (hashArray).length) {
    hashArray[arrayStr] = 1;
    continue;
  }
  for (const key in hashArray) {
    if (key === arrayStr) {
      hashArray[arrayStr] = hashArray[arrayStr] + 1;
      isSameStr = true;
      break;
    }
  }
  if (isSameStr === false) {
    hashArray[arrayStr] = 1;
  }
}
console.log (hashArray);
