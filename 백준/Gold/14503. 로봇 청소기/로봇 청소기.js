const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const rooms = [];

for (let i = 2; i < input.length; i++) {
  rooms.push(input[i].split(" ").map(Number));
}

let cnt = 0;
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let [currentX, currentY, dir] = input[1].split(" ").map(Number);

while (true) {
  if (rooms[currentX][currentY] === 0) {
    rooms[currentX][currentY] = 2;
    cnt++;
  }

  let canMove = false;

  for (let i = 0; i < 4; i++) {
    let nx = currentX + dx[i];
    let ny = currentY + dy[i];

    if (0 <= nx && nx < N && 0 <= ny && ny < M && rooms[nx][ny] === 0) {
      canMove = true;
      break;
    }
  }

  if (canMove) {
    for (let i = 0; i < 4; i++) {
      dir = (dir + 3) % 4;
      let nx = currentX + dx[dir];
      let ny = currentY + dy[dir];
      if (rooms[nx][ny] === 0) {
        [currentX, currentY] = [nx, ny];
        break;
      }
    }
  } else {
    let nx = currentX + dx[(dir + 2) % 4];
    let ny = currentY + dy[(dir + 2) % 4];

    if (0 <= nx && nx < N && 0 <= ny && ny < M && rooms[nx][ny] !== 1) {
      [currentX, currentY] = [nx, ny];
    } else {
      break;
    }
  }
}

console.log(cnt);
