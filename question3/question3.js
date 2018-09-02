'use strict';
let drawFlag = false;
let zyankenHash = {0:"グー",1:"チョキ",2:"パー"};
let resultString = "";
let getValue = 0;
let computerValue = 0;
let resultValue = 0;

do {
  console.log("「じゃんけん・・・」\n0.グー 1.チョキ 2.パー");
  getValue = Number(prompt ());
  computerValue = Math.floor(Math.random()*Math.floor(3));
  console.log("「ぽい！」");
  console.log("＊コンピューター：" + zyankenHash[computerValue]);
  console.log("＊あなた：" + zyankenHash[getValue]);
  /*
  左がグーの時：  0 - 1 = -1  勝ち | 0 - 2 = -2 負け
  左がチョキの時: 1 - 2 = -1　勝ち | 1 - 0 = 1 負け
  左がパーの時:   2 - 0 = 2   勝ち | 2 - 1 = 1 負け
  故に、左を基準として2か-1の時は勝ち、同値はあいこ、それ以外は負けになる
  */
  resultValue = getValue - computerValue;
  switch(resultValue){
    case -1:
    case 2:
      resultString = "「あなたの勝ち！」";
      drawFlag = false;
      break;
    case 0:
      resultString = "「アイコでしょ！」";
      drawFlag = true;
      break;
    default:
      resultString = "「あなたの負け！」";
      drawFlag = false;
      break;
  }
  console.log(resultString)
} while (drawFlag);



