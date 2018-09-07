'use strict';
// Fooをuryyyy!!に置換する
function replaceFooText (text) {
  const replaceRegular = /foo/g;
  const replaceText = 'uryyyy!!';
  text = text.replace (replaceRegular, replaceText);
  return text;
}

// ハッシュの中の全てをFooをuryyyy!!に変換する
function toUry (setHash) {
  const objectNameString = '[object Object]';
  for (const key in setHash) {
    if (Object.prototype.toString.call (setHash[key]) === objectNameString) {
      setHash[key] = toUry (setHash[key]);
    } else {
      setHash[key] = replaceFooText (setHash[key]);
    }
  }
  return setHash;
}

const hash = {
  main: {
    first: {text: 'foobar'},
    second: {text: 'fizzbuzz', child: {text: 'foobar'}},
  },
  sub: {
    first: {text: 'fizzbuzz', child: {text: 'foobar'}},
    second: {
      third: {text: 'barfoo', child: {text: 'foobar'}},
      forth: {child: {text: 'jit_foo_foo'}},
    },
  },
  text: 'foofava',
};
console.log (toUry (hash));
