'use strict';
let getString = prompt ('文字列を入力してください。');
// ダブルクォーテーションが入力されるものと考えてそれを削除する
getString = getString.replace (/\"/g, '');
let arrayOfString = '';
arrayOfString = getString.split (' ');
let hashArray;
hashArray = {};
// 単語の数を数える
for (const arrayStr of arrayOfString) {
  let isSameStr = false;
  /*
  if (Object.keys (hashArray).length === 0) {
    hashArray[arrayStr] = 1;
    continue;
  } */
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
// 文字列に直す
let resultStr;

console.log (hashArray);
