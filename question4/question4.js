'use strict';
const getValue = Number (prompt ('数字を入力してください'));
let resultValue = 0;
let calProcessString = '（';
function calSumValue (value, sumValue = 0) {
  calProcessString += String (value);
  sumValue += value;
  value -= 1;
  if (value < 1) {
    resultValue = sumValue;
    calProcessString += 'の結果）';
  } else {
    calProcessString += '+';
    calSumValue (value, sumValue);
  }
}
calSumValue (getValue);
calProcessString = String (resultValue) + calProcessString;
console.log (calProcessString);
