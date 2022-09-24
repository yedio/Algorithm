/*
문제: https://school.programmers.co.kr/learn/courses/30/lessons/17681
날짜: 22.09.15
*/

function solution(n, arr1, arr2) {
  var answer = [];
  let binaryArr1 = [];
  let binaryArr2 = [];

  // 배열을 2진수 형태로 변환,
  for (let i = 0; i < n; i++) {
    const binary1 = arr1[i].toString(2);
    const binary2 = arr2[i].toString(2);

    let str1 =
      binary1.length === n ? binary1 : '0'.repeat(n - binary1.length) + binary1;
    let str2 =
      binary2.length === n ? binary2 : '0'.repeat(n - binary2.length) + binary2;

    binaryArr1.push(str1);
    binaryArr2.push(str2);
  }

  // 두 배열의 요소 비교 (두 요소가 0이면 공백,아니면 # 처리)
  for (let i = 0; i < n; i++) {
    let result = '';
    for (let j = 0; j < n; j++) {
      if (binaryArr1[i][j] === '0' && binaryArr2[i][j] === '0') {
        result += ' ';
      } else {
        result += '#';
      }
    }
    answer.push(result);
  }

  return answer;
}

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];
//["#####","# # #", "### #", "# ##", "#####"]

// const n = 6;
// const arr1 = [46, 33, 33, 22, 31, 50];
// const arr2 = [27, 56, 19, 14, 14, 10];
// //["######", "### #", "## ##", " #### ", " #####", "### # "]

console.log(solution(n, arr1, arr2));
