'use strict';
const answerNumber = Math.floor (Math.random () * 101);
let correctFlag = false;
let count = 0;
//未入力も含めて整数でない値は、-1を返す
function isIntNumber (value) {
  value = String (value);
  if (/^(\-|\+)?([0-9]+)$/.test (value)) return Number (value);
  return -1;
}
console.log ('0-100で数字を当てて');
//whileでループした場合、初回で読み込んだ際に
//正解が出るまでコンソール上に表示されない
//その為、今回は敢えてsetIntervalを採用した。
const intervalID = setInterval (function () {
  let getNumber = prompt ('数字を入力してください');
  getNumber = isIntNumber (getNumber);
  // 範囲外の数字もしくは整数以外が入力されたら
  // 再度入力させる
  if (getNumber < 0 || getNumber > 100) {
    console.log ('不正な値です。0-100での数字を再度入力してください');
  } else {
    // 正しい値が入力された時だけカウントする
    count += 1;
    // 入力した数字が見えないと分かりにくいので
    // 入力した数字は見えるようにしています
    console.log ('入力した数字：' + String (getNumber));
    if (getNumber > answerNumber) {
      console.log ('もっと下');
    } else if (getNumber < answerNumber) {
      console.log ('もっと上');
    } else {
      console.log ('正解！・・・' + String (count) + '回目で当てました');
      clearInterval (intervalID);
    }
  }
}, 100);
