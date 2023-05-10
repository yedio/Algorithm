/*
2개의 문자를 인자로 받으며
두번째 문자열이 첫번째 문자열의 anagram인지 확인하는 validAnagram 함수이다. 
return true/false

조건: 시간복잡도 O(n)

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('awesome', 'awesom') // false
validAnagram('texttwisttime', 'timetwisttext') // true
*/

function validAnagram_before(str1, str2) {
  let obj1 = {};
  let obj2 = {};

  //1. 길이 비교
  if (str1.length !== str2.length) {
    return false;
  }

  //2. str1, str2의 요소를 객체로 카운팅하기
  for (let e of str1) {
    if (obj1[e] === undefined) {
      obj1[e] = 1;
    } else {
      obj1[e] += 1;
    }
  }

  for (let e of str2) {
    if (obj2[e] === undefined) {
      obj2[e] = 1;
    } else {
      obj2[e] += 1;
    }
  }

  // obj1 { t: 5, e: 2, x: 1, w: 1, i: 2, s: 1, m: 1 }
  // obj2 { t: 5, e: 2, x: 1, w: 1, i: 2, s: 1, m: 1 }

  //3. 객체의 값 비교
  for (let e in obj1) {
    if (obj1[e] !== obj2[e]) {
      return false;
    }
  }
  return true;
}

console.log(
  'validAnagram_before',
  validAnagram_before('texttwisttime', 'timetwisttext')
);

function validAnagram(str1, str2) {
  //1. 길이 비교
  if (str1.length !== str2.length) {
    return false;
  }

  //2. str1의 요소를 객체로 카운팅하기
  const lookup = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  // lookup { t: 5, e: 2, x: 1, w: 1, i: 2, s: 1, m: 1 }

  //3. str2 의 요소를 객체에서 찾아 -1을 하고 값이 0이거나, 없다면 false를 반환.
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log('validAnagram', validAnagram('texttwisttime', 'timetwisttext'));

/* 
결과.
validAnagram_before: O(n)의 시간복잡도이지만, 반복문을 총 3번 사용 
validAnagram: 하나의 문자열을 객체로 만들고, 그 객체의 값을 -로 빼면서 확인하는 방법을 사용하여 반복문을 총 2번 사용.
*/
