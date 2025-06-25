function solution(k, dungeons) {
    let max = 0;

    const visited = new Array(dungeons.length).fill(false);

    function dfs(currentK, count) {
        max = Math.max(max, count);
        for (let i = 0; i < dungeons.length; i++) {
            const [need, use] = dungeons[i];
            if (!visited[i] && currentK >= need) {
                visited[i] = true;
                dfs(currentK - use, count + 1);
                visited[i] = false;
            }
        }
    }

    dfs(k, 0);
    return max;
}