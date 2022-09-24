/*
문제: https://school.programmers.co.kr/learn/courses/30/lessons/72410
날짜: 22.09.13
*/

function solution(new_id) {
  let answer = '';
  // 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환
  // 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
  // 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
  // 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거
  // 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입
  // 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
  //      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거
  answer = new_id
    .toLowerCase()
    .replace(/[^\w-._]+/g, '')
    .replace(/[.]+/gi, '.')
    .replace(/^\.+/, '')
    .replace(/\.+$/, '')
    .replace(/^\s*$/, 'a')
    .slice(0, 15)
    .replace(/\.+$/, '');

  // 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙임.

  if (answer.length < 3) {
    for (let i = answer.length; i < 3; i++) {
      answer += answer.charAt(answer.length - 1);
    }
  }

  return answer;
}

const new_id = '...!@BaT#*..y.abcdefghijklm'; //"bat.y.abcdefghi"
// const new_id = 'z-+.^..'; //"z--"
// const new_id = '=.='; //"aaa"
// const new_id = '123_.def'; //"123_.def"
// const new_id = 'abcdefghijklmn.p'; //"abcdefghijklmn"

console.log(solution(new_id));
