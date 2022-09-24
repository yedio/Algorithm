/*
문제: https://school.programmers.co.kr/learn/courses/30/lessons/17680
날짜: 22.09.16

[매개변수]
- cacheSize: 캐시크기 
- cities: 도시 이름

[return]
입력된 도시이름 배열을 순서대로 처리할 때, "총 실행시간"을 출력한다.

[조건]
- LRU 사용
- cache hit = 1 / cache miss = 5
*/

function solution(cacheSize, cities) {
  var answer = 0;
  const cacheArr = [];

  // cacheSize가 0일 때는 어떠한 도시이름도 담고, 찾을 수 없으므로 도시 이름 배열의 길이에 모두 cache miss 처리
  if (cacheSize === 0) return cities.length * 5;

  for (const city of cities) {
    // 대,소문자 구분하지 않기 위해 cacheArr에 넣는 값들 대,소문자 처리
    const lowerCity = city.toLowerCase();

    // cacheArr에 도시 이름이 존재한다면, cache hit 처리 + 해당 도시 이름의 idx 삭제후 맨 최근 데이터에 추가.
    // 존재하지 않는다면, cacheSize와 cacheArr의 길이가 같다면 맨 앞 요소 삭제 조건 추가 후 cacheMiss 처리 + 도시 이름 맨 뒤에 추가하기
    const cacheIdx = cacheArr.indexOf(lowerCity);
    if (cacheIdx > 0) {
      answer += 1;
      cacheArr.splice(cacheIdx, 1);
      cacheArr.push(lowerCity);
    } else {
      if (cacheArr.lengt === cacheSize) {
        cacheArr.shift();
      }
      answer += 5;
      cacheArr.push(lowerCity);
    }
  }
  return answer;
}

const cacheSize = 3;
const cities = [
  'Jeju',
  'Pangyo',
  'Seoul',
  'NewYork',
  'LA',
  'Jeju',
  'Pangyo',
  'Seoul',
  'NewYork',
  'LA',
]; // 50

// const cacheSize = 3;
// const cities = [
//   'Jeju',
//   'Pangyo',
//   'Seoul',
//   'Jeju',
//   'Pangyo',
//   'Seoul',
//   'Jeju',
//   'Pangyo',
//   'Seoul',
// ]; // 21

// const cacheSize = 2;
// const cities = [
//   'Jeju',
//   'Pangyo',
//   'Seoul',
//   'NewYork',
//   'LA',
//   'SanFrancisco',
//   'Seoul',
//   'Rome',
//   'Paris',
//   'Jeju',
//   'NewYork',
//   'Rome',
// ]; // 60

// const cacheSize = 5;
// const cities = [
//   'Jeju',
//   'Pangyo',
//   'Seoul',
//   'NewYork',
//   'LA',
//   'SanFrancisco',
//   'Seoul',
//   'Rome',
//   'Paris',
//   'Jeju',
//   'NewYork',
//   'Rome',
// ]; // 52

// const cacheSize = 2;
// const cities = ['Jeju', 'Pangyo', 'NewYork', 'newyork']; // 16

// const cacheSize = 2;
// const cities = ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']; // 25

console.log(solution(cacheSize, cities));
