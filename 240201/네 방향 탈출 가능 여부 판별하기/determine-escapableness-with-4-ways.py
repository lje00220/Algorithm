from collections import deque

n, m = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(n)]
visited = [[0 for _ in range(m)] for _ in range(n)]


def bfs():
    while q:
        r, c = q.popleft()

        for dr, dc in ((1, 0), (0, 1), (-1, 0), (0, -1)):
            nr, nc = r + dr, c + dc 

            if 0 <= nr < n and 0 <= nc < m and a[nr][nc] == 1 and not visited[nr][nc]:
                visited[nr][nc] = 1
                q.append((nr, nc))




q = deque()  
visited[0][0] = 1 
q.append((0, 0))  

bfs() 

print(visited[n - 1][m - 1])