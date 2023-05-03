/*
2개의 배열을 인자로 받는 same이라는 함수이다.
첫번째 배열의 요소에 제곱된 값들이 두번째 배열에 있다면 참을 반환해야 한다.(순서는 상관없으며 빈도수는 같아야함)

same([1,2,3],[4,1,9]) //true
same([1,2,3],[1,9]) //false
same([1,2,1],[4,4,1]) //false (must be same frequency)
*/

function same_before(arr1, arr2) {
  // 1. 배열의 길이 비교
  if (arr1.length !== arr2.length) {
    return false;
  }
  // 2. 배열 1의 요소에 제곱을 한 값이 배열 2에 있는지 indexOf를 사용하여 있다면 배열 2에 해당하는 요소를 삭제 / 없다면 false반환
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
console.log('same_before', same_before([1, 2, 3, 2], [9, 1, 4, 4]));

function same(arr1, arr2) {
  // 1. 배열의 길이 비교
  if (arr1.length !== arr2.length) {
    return false;
  }

  // 2. 각각 배열에 맞는 객체에 같은 값이 몇개 들어 있는지 세팅.
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    // 3. 1번배열 객체의 키 값을 제곱한 값이 2번배열 객체의 키 값으로 있는지 확인
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // 4. 1번배열 객체의 키의 value 값과 2번배열 객체의 키(1번배열 객체의 키**2)의 value값이 같은지 확인(빈도 수가 같은지 확인)
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log('same', same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));

/* 
결과.
same_before: n^2의 시간복잡도가 나타난다. for + indexOf => 이중 중첩 반복문
same: O(n)의 시간복잡도로 단순화함. 두 개의 배열을 객체로 세분화하여 각 배열의 요소들을 분류한 다음, 각 배열을 비교할 수 있다.
*/
