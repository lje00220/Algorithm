function solution(dirs) {
    const move = {
        U: [0, 1],
        D: [0, -1],
        L: [-1, 0],
        R: [1, 0]
    };
    
    let [x, y] = [0, 0];
    const visited = new Set();

    for (let dir of dirs) {
        const nx = x + move[dir][0];
        const ny = y + move[dir][1];
        
        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;
        
        const path1 = `${x},${y},${nx},${ny}`;
        const path2 = `${nx},${ny},${x},${y}`;
        visited.add(path1);
        visited.add(path2);
        
        x = nx;
        y = ny;
    }
    
    return visited.size / 2;
}