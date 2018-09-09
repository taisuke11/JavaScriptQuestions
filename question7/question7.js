'use strict';
// 正解用の重複無しのランダムの四桁の数字を決める
const iniRandomNumber = Math.floor (Math.random () * Math.floor (10));
let baseArray = [];
baseArray = Array.apply (null, {length: 10}).map (Number.call, Number);
function getAnsewerNumber (ansewerNubmerArray, selectNumberArray) {
  if (ansewerNubmerArray.length >= 4) {
    return ansewerNubmerArray;
  }
  const indexNumber = Math.floor (
    Math.random () * Math.floor (10 - ansewerNubmerArray.length)
  );
  ansewerNubmerArray.push (selectNumberArray[indexNumber]);
  selectNumberArray = selectNumberArray.filter (
    value => value !== selectNumberArray[indexNumber]
  );
  return getAnsewerNumber (ansewerNubmerArray, selectNumberArray);
}
const ansewerNumberArray = getAnsewerNumber (
  [iniRandomNumber],
  baseArray.filter (value => value !== iniRandomNumber)
);

let playCount = 1;
const intervalID = setInterval (function () {
  let getNumberArray = [];
  const tempValue = prompt ('四桁の数字は？');
  // 空欄、文字列、小数点を含む数字、4桁でない数字はエラーとして処理しますが
  // 同じ数字を二つ以上入れるのは戦略としてありだと思ったので
  // エラー処理は入れていません
  if (
    isNaN (Number (tempValue)) ||
    tempValue.length !== 4 ||
    tempValue.indexOf ('.') !== -1 ||
    tempValue.indexOf (' ') !== -1 ||
    tempValue.indexOf ('　') !== -1
  ) {
    console.log ('不正な値です。0～9から四桁の数字を入力してください');
  } else {
    getNumberArray = tempValue.split ('');
    const array0_4 = [0, 1, 2, 3];
    // このままだと文字列なので数字に変換する
    array0_4.forEach (function (value) {
      getNumberArray[value] = Number (getNumberArray[value]);
    });
    // hitとblowの数を求める
    let hitCount = 0;
    let blowCount = 0;
    for (const count1 of [0, 1, 2, 3]) {
      for (const count2 of [0, 1, 2, 3]) {
        if (ansewerNumberArray[count1] === getNumberArray[count2]) {
          if (count1 === count2) {
            hitCount += 1;
            break;
          } else {
            blowCount += 1;
            break;
          }
        }
      }
    }
    // 結果。
    console.log ('入力した数字:' + getNumberArray.join (''));
    if (hitCount === 4) {
      console.log (String (playCount) + '回で正解！');
      clearInterval (intervalID);
    } else {
      console.log (
        '外れ：' + String (hitCount) + 'Hits,' + String (blowCount) + 'Blow'
      );
      playCount += 1;
    }
  }
}, 100);
