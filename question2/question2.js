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
// 初めてファイルを開いたときと
// ファイルを開いた状態で更新をかけた場合での表示が異なるので
// 統一するために文字列に変換する
let resultStr = '{';
for (const key in hashArray) {
  if (resultStr !== '{') {
    resultStr += ',';
  }
  resultStr += key + ':' + String (hashArray[key]);
}
resultStr += '}';

console.log (resultStr);
