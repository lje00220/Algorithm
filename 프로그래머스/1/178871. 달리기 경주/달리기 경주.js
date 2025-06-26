function solution(players, callings) {
    const map = new Map();
    for (let i = 0; i < players.length; i++) {
        map.set(players[i], i);
    }

    for (let calling of callings) {
        const idx = map.get(calling);
        if (idx > 0) {
            const frontPlayer = players[idx - 1];

            [players[idx - 1], players[idx]] = [players[idx], players[idx - 1]];

            map.set(calling, idx - 1);
            map.set(frontPlayer, idx);
        }
    }

    return players;
}