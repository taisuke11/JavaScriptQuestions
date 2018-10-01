'use strict';
const initialArray = [20, 31, 42, 13, 5, 38];
let sumValue = 0;
let averValue = 0;
initialArray.forEach (element => {
  sumValue += element;
});
const ArraySize = initialArray.length;
averValue = sumValue / ArraySize;
console.log ('合計：' + sumValue);
console.log ('平均：' + averValue);
// バブルソートによる小さい順の並び替え。
let sortBySmallArray = [];
sortBySmallArray = initialArray;
let changeflag = false;
let index1 = 1;
do {
  changeflag = false;
  for (let i = 0; i < ArraySize - 1; i++) {
    for (let j = 1; j < ArraySize - i - 1; j++) {
      const index1 = j - 1;
      const index2 = j;
      let tempValue = 0;
      if (sortBySmallArray[index1] > sortBySmallArray[index2]) {
        tempValue = sortBySmallArray[index1];
        sortBySmallArray[index1] = sortBySmallArray[index2];
        sortBySmallArray[index2] = tempValue;
        changeflag = true;
      }
    }
  }
} while (changeflag);
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
  for (let count = 1; count < seq.length; count++) {
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

const sortByBigArray = quickSortByBig (initialArray);

console.log ('小さい順：' + sortBySmallArray);
console.log ('大きい順：' + sortByBigArray);
