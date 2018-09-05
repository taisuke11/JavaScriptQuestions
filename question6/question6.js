'use strict';
const answerNumber = Math.floor (Math.random () * Math.floor (101));
let correctFlag = false;
let count = 0;
const intervalID = setInterval (function () {
  count += 1;
  let hintMessage = '';
  const getNumber = Number (prompt ('数字を入力してください'));
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
}, 100);
