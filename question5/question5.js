'use strict';
const iniArray = [20, 31, 42, 13, 5, 38];
let sumValue = 0;
let averValue = 0;
iniArray.forEach (element => {
  sumValue += element;
});
const ArraySize = iniArray.length;
averValue = sumValue / ArraySize;
console.log ('合計：' + sumValue);
console.log ('平均：' + averValue);
// バブルソートによる小さい順の並び替え。
let sortBySmallArray = [];
sortBySmallArray = iniArray;
let changeflag = false;
let count1 = 1;
do {
  changeflag = false;
  count1 = 0;
  if (count1 !== ArraySize - 1) {
    sortBySmallArray.forEach (element1 => {
      for (const i of Array (ArraySize - count1 - 1).keys ()) {
        const count2 = count1 + i + 1;
        let tempValue = 0;
        if (element1 > sortBySmallArray[count2]) {
          tempValue = sortBySmallArray[count1];
          sortBySmallArray[count1] = sortBySmallArray[count2];
          sortBySmallArray[count2] = tempValue;
          changeflag = true;
        }
      }
      count1 += 1;
    });
  }
} while (changeflag === true);
const minValue = sortBySmallArray[0];
const maxValue = sortBySmallArray[ArraySize - 1];
console.log ('最小値：' + minValue);
console.log ('最大値：' + maxValue);

// クイックソートによる大きい順の並び替え
function quickSortByBig (seq) {
  if (seq.length < 1) {
    return seq;
  }
  const pivot = seq[0];
  let left = [];
  let right = [];
  right = [];
  for (const i of Array (seq.length - 1).keys ()) {
    const count = i + 1;
    if (seq[count] >= pivot) {
      left.push (seq[count]);
    } else {
      right.push (seq[count]);
    }
  }
  // 左側を並び替えるまで再起処理をし続ける。
  left = quickSortByBig (left).concat ([pivot]);
  // 右側を並び替えるまで再起処理をし続ける
  const resultArray = left.concat (quickSortByBig (right));
  return resultArray;
}

const sortByBigArray = quickSortByBig (iniArray);

console.log ('小さい順：' + sortBySmallArray);
console.log ('大きい順：' + sortByBigArray);
