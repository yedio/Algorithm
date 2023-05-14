/*
오름차순으로 정렬된 int arr을 받는 sumZero라는 함수가 있다.
해당 함수는 두개의 요소의 합이 0이 되는 첫번째 쌍을 배열로 반환하며, 합이 0이 되는 요소가 없다면 undefined를 반환한다.

sumZero([-4,-3,-2,-1,0,1,2,3,10]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
*/

function sumZero(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx < rightIdx) {
    let sum = arr[leftIdx] + arr[rightIdx];

    if (sum === 0) {
      return [arr[leftIdx], arr[rightIdx]];
    } else if (sum > 0) {
      rightIdx--;
    } else if (sum < 0) {
      leftIdx++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])); // [-3,3]

/* 
해당 풀이의 시간 복잡도는 O(n)이며, 
left, right에 해당하는 두 요소를 맨 끝에 위치시키고 
sum이 0이라면 pair를 return,
sum이 음수라면 right를 한칸 앞의 index로 설정하고
sum이 양수라면 left를 한칸 뒤의 index로 설정하여 찾으면 된다.
*/
