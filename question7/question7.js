'use strict';
// 正解用の重複無しのランダムの四桁の数字を決める
let baseArray = [...Array (10).keys ()];
let answerNumberArray = [];
for (let i = 1; i <= 4; i++) {
  const indexNumber = Math.floor (
    Math.random () * (10 - answerNumberArray.length)
  );
  answerNumberArray.push (...baseArray.splice (indexNumber, 1));
}
let playCount = 1;
while (true) {
  let getNumberArray = [];
  let tempValue = prompt ('四桁の数字は？');
  // 空欄、文字列、小数点を含む数字、4桁でない数字はエラーとして処理しますが
  // 同じ数字を二つ以上入れるのは戦略としてありだと思ったので
  // エラー処理は入れていません
  const filterInt = function (value) {
    value = String (value);
    if (/^\d{4}$/.test (value)) return Number (value);
    return NaN;
  };
  if (isNaN (filterInt (tempValue))) {
    console.log ('不正な値です。0～9から四桁の数字を入力してください');
    continue;
  }
  getNumberArray = tempValue.split ('');
  // このままだと文字列なので数字に変換する
  for (let i = 0; i <= 3; i++) {
    getNumberArray[i] = Number (getNumberArray[i]);
  }
  // hitとblowの数を求める
  let hitCount = 0;
  let blowCount = 0;
  for (let index1 = 0; index1 <= 3; index1++) {
    for (let index2 = 0; index2 <= 3; index2++) {
      if (answerNumberArray[index1] === getNumberArray[index2]) {
        if (index1 === index2) {
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
    break;
  } else {
    console.log (
      '外れ：' + String (hitCount) + 'Hits,' + String (blowCount) + 'Blow'
    );
    playCount += 1;
  }
}
