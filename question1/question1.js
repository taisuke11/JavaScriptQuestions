'use strict';
let get_number = 0;
get_number = Number (prompt ('数字を入力してください。'));
for (const value of Array.from ({length: get_number}, (v, k) => k + 1)) {
  let result_str = 'error';
  if (value % 15 == 0) {
    result_str = 'FizzBuzz';
  } else if (value % 5 == 0) {
    result_str = 'Buzz';
  } else if (value % 3 == 0) {
    result_str = 'Fizz';
  } else {
    result_str = value;
  }
  console.log (result_str);
}
