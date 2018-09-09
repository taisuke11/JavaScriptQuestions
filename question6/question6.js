'use strict';
const answerNumber = Math.floor (Math.random () * Math.floor (101));
let correctFlag = false;
let count = 0;
console.log ('0-100で数字を当てて');
const intervalID = setInterval (function () {
  let hintMessage = '';
  let getNumber = prompt ('数字を入力してください');
  // 何も入力しない状態で変換すると0になってしまうので
  // 空欄の場合はエラーの値を入れるようにする
  if (getNumber === '') {
    getNumber = -1;
  } else {
    getNumber = Number (getNumber);
  }
  // 範囲外の数字もしくは整数以外が入力されたら
  // 再度入力させる
  if (
    getNumber < 0 ||
    getNumber > 100 ||
    Math.round (getNumber) !== getNumber
  ) {
    console.log ('不正な値です。0-100での数字を再度入力してください');
  } else {
    // 正しい値が入力された時だけカウントする
    count += 1;
    // 入力した数字が見えないと分かりにくいので
    // 入力した数字は見えるようにしています
    console.log ('入力した数字：' + String (getNumber));
    if (getNumber > answerNumber) {
      hintMessage = 'もっと下';
    } else if (getNumber < answerNumber) {
      hintMessage = 'もっと上';
    } else {
      correctFlag = true;
      console.log ('正解！・・・' + String (count) + '回目で当てました');
      clearInterval (intervalID);
    }
    // 正解でない場合は、ヒントを表示する
    if (correctFlag === false) {
      console.log (hintMessage);
    }
  }
}, 100);
