from collections import deque

n = int(input())
# a = [list(map(int, input().split())) for _ in range(n)]
r1, c1, r2, c2 = map(int, input().split())
visited = [[0 for _ in range(n)] for _ in range(n)]
dist = [[-1 for _ in range(n)] for _ in range(n)] 

def bfs():
    while q:
        r, c = q.popleft()

        for dr, dc in ((2, 1), (2, -1), (-2, 1), (-2, -1), (1, 2), (1, -2), (-1, 2), (-1, -2)):
            nr, nc = r + dr, c + dc

            if 0 <= nr < n and 0 <= nc < n and not visited[nr][nc]:
                visited[nr][nc] = 1
                dist[nr][nc] = dist[r][c] + 1
                q.append((nr, nc))

q = deque() 
visited[r1-1][c1-1] = 1
dist[r1-1][c1-1] = 0    
q.append((r1-1, c1-1)) 

bfs() 

print(dist[r2-1][c2-1])