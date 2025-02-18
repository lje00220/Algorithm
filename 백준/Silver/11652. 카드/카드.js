const fs = require('fs');  
const temp = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(BigInt);
const n = temp[0];
const input = temp.slice(1,)
let map = new Map();
  for (let i = 0; i < n; i++) {
    let card = input[i];
    let isExist = map.get(card);
    if (isExist) {
      map.set(card, isExist + 1);
    } else {
      map.set(card, 1);
    }
  }
  let sorted = [...map].sort((a, b) => {
    if (b[1] < a[1]) return -1;
    else if (b[1] > a[1]) return 1;
    else {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      else return 0;
    }
  });
  console.log(sorted[0][0].toString());
