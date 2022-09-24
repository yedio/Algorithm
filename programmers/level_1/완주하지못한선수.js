/*
유형: 해시
문제: https://school.programmers.co.kr/learn/courses/30/lessons/42576
날짜: 22.09.22

[매개변수]
- participant: 마라톤에 참여한 선수들의 이름이 담긴 배열
- completion: 완주한 선수들의 이름이 담긴 배열

[return]
- 완주하지 못한 선수의 이름

[조건]
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.

[풀이]
splice가 시간복잡도를 많이 사용하며, for문이 끝까지 돌아가야하기 때문 효율성 테스트에서 통과하지 못함.
=> participant는 추가의 개념으로, completion은 제거의 개념을 가지고 key, value의 형태인 해시 알고리즘 형태로 문제를 해결하자. 

*/

function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i];
    let b = completion[i];

    //participant 의 값은 +1, completion 의 value는 -1로 업데이트 해준다
    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);

    console.log('+', map);
  }

  // value 값이 1이면 완주하지 못한 선수이므로 return
  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return '';
}

// const participant = ['leo', 'kiki', 'eden'];
// const completion = ['eden', 'kiki']; //leo

// const participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
// const completion = ['josipa', 'filipa', 'marina', 'nikola']; //vinko

const participant = ['mislav', 'stanko', 'mislav', 'ana'];
const completion = ['stanko', 'ana', 'mislav']; //mislav

console.log('*RESULT*', solution(participant, completion));

/* 나의 풀이 
  
function solution(participant, completion) {
  var answer = [...participant];

  completion.forEach(e => {
    answer.splice(answer.indexOf(e), 1);
  });

  return answer[0];
}  

*/
