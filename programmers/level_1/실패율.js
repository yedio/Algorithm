/*
문제: https://school.programmers.co.kr/learn/courses/30/lessons/42889
날짜: 22.09.13


[참고]
https://overcome-the-limits.tistory.com/521
*/

function solution(N, stages) {
  // [key] 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
  const result = [];
  for (let i = 1; i <= N; i++) {
    // 1. 스테이지에 도달한 플레이어 수
    const reach = stages.filter(x => x >= i).length;
    // 2. 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
    const curr = stages.filter(x => x === i).length;
    // 3. 실패율 구하여 [stage,실패율] 요소로 이루어진 배열 생성
    result.push([i, curr / reach]);
  }
  // 4. 배열의 1번째 요소(실패율) 내림차순으로 정렬
  result.sort((a, b) => b[1] - a[1]);
  // 5. 실패율 내림차순으로 정렬된 배열의 0번째 요소만 추출하여 새로운 배열 return
  return result.map(x => x[0]);
}

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3]; // [3,4,2,1,5]

// const N = 4;
// const stages = [4, 4, 4, 4, 4]; // [4,1,2,3]

console.log(solution(N, stages));
