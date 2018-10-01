'use strict';
let word = prompt ('文字列を入力してください。');
// ダブルクォーテーションが入力されるものと考えてそれを削除する
word = word.replace (/\"/g, '');
const arrayOfWords = word.split (' ');
let hashOfWordCount;
hashOfWordCount = {};
// 単語の数を数える
for (const value of arrayOfWords) {
  if (hashOfWordCount[value]) {
    hashOfWordCount[value]++;
  } else {
    hashOfWordCount[value] = 1;
  }
  /* let isSameWord = false;
  for (const key in hashOfWordCount) {
    if (key === value) {
      hashOfWordCount[value] = hashOfWordCount[value] + 1;
      isSameWord = true;
      break;
    }
  }
  if (isSameWord === false) {
    hashOfWordCount[value] = 1;
  }*/
}
// 初めてファイルを開いたときと
// ファイルを開いた状態で更新をかけた場合での表示が異なるので
// 統一するために文字列に変換する
let resultStr = '{';
for (const key in hashOfWordCount) {
  if (resultStr !== '{') {
    resultStr += ',';
  }
  resultStr += key + ':' + String (hashOfWordCount[key]);
}
resultStr += '}';

console.log (resultStr);
