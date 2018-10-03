'use strict';
let drawFlag = true;
const zyankenHash = {0: 'グー', 1: 'チョキ', 2: 'パー'};
let resultString = '';
let myZyankenValue = 0;
let computerZyankenValue = 0;
let resultValue = 0;
do {
  console.log ('「じゃんけん・・・」');
  // 入力する際に何を入力すればいいのかわかりやすくするために
  // promptの方に0.グー 1.チョキ 2.パーを表示するように修正
  myZyankenValue = prompt ('0.グー 1.チョキ 2.パー');
  myZyankenValue = parseInt (myZyankenValue, 10);
  // ハッシュキーが存在しないデータを入力した場合
  // 再度入力させる
  if (!zyankenHash[myZyankenValue]) {
    console.log ('不正な値です。0か1か2の値を再度入力してください');
  } else {
    computerZyankenValue = Math.floor (Math.random () * 3);
    console.log ('「ぽい！」');
    console.log ('＊コンピューター：' + zyankenHash[computerZyankenValue]);
    console.log ('＊あなた：' + zyankenHash[myZyankenValue]);
    // 左がグーの時：  0 - 1 = -1  勝ち | 0 - 2 = -2 負け
    // 左がチョキの時: 1 - 2 = -1　勝ち | 1 - 0 = 1 負け
    // 左がパーの時:   2 - 0 = 2   勝ち | 2 - 1 = 1 負け
    // 故に、左を基準として2か-1の時は勝ち、同値はあいこ、それ以外は負けになる
    resultValue = myZyankenValue - computerZyankenValue;
    switch (resultValue) {
      case -1:
      case 2:
        resultString = '「あなたの勝ち！」';
        drawFlag = false;
        break;
      case 0:
        resultString = '「アイコでしょ！」';
        break;
      default:
        resultString = '「あなたの負け！」';
        drawFlag = false;
        break;
    }
    console.log (resultString);
  }
} while (drawFlag);
