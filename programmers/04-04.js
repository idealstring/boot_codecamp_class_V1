// **026. 홀수 문자열**

// **`문제 설명`**

// num을 입력받아 1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만들어야 합니다.

// num이 5일 경우에는 "135"입니다.

// **`입력 인자`**

// - num은 숫자열입니다.

// **`주의 사항`**

// - for을 이용해서 문제를 풀어야 합니다.
// - 짝수를 제외하는 조건을 추가해야 합니다.

// **`예상 결과`**
// makeOdd(5) // "135"
// makeOdd(7) // "1357"

function makeOdd(num) {
  let str = "";

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      str += String(i);
    }
  }

  return str;
}

console.log(makeOdd(5));
console.log(makeOdd(7));