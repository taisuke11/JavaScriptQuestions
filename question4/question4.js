'use strict';
const value = Number (prompt ('数字を入力してください'));
function calSumValue (value, sumValue = 0) {
  if (value < 1) {
    return sumValue;
  }
  sumValue += value;
  value -= 1;
  return calSumValue (value, sumValue);
}
console.log (String (calSumValue (value)));
