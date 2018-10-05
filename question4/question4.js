'use strict';
const value = Number (prompt ('数字を入力してください'));
function calSumValue (value) {
  if (value < 1) {
    return 0;
  }
  return calSumValue (value - 1) + value;
}
console.log (String (calSumValue (value)));
