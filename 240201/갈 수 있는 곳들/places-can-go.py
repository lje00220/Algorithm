from collections import deque

n, k = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(n)]
visited = [[0 for _ in range(n)] for _ in range(n)]
cnt = 0

def bfs():
    while q:
        r, c = q.popleft()

        for dr, dc in ((1, 0), (0, 1), (-1, 0), (0, -1)):
            nr, nc = r + dr, c + dc 

            if 0 <= nr < n and 0 <= nc < n and a[nr][nc] == 0 and not visited[nr][nc]:
                visited[nr][nc] = 1
                q.append((nr, nc))

q = deque() 

for _ in range(k):
    x, y = map(int, input().split())
    visited[x-1][y-1] = 1 
    q.append((x-1, y-1))  
    bfs() 

for i in range(n):
    for j in range(n):
        if visited[i][j] == 1:
            cnt += 1

print(cnt)