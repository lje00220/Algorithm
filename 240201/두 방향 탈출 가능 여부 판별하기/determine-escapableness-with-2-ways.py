n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(m)]

answer = [[0 for _ in range(n)] for _ in range(m)]
visited = [[0 for _ in range(n)] for _ in range(m)]

def in_range(x, y):
    return 0 <= x < n and 0 <= y < n

def can_go(x, y):
    if not in_range(x, y):
        return False
    
    if visited[x][y] or arr[x][y] == 0:
        return False
    
    return True

def dfs(x, y):
    global order

    dxs, dys = [1, 0], [0, 1]

    for dx, dy in zip(dxs, dys):
        new_x, new_y = x + dx, y + dy

        if can_go(new_x, new_y):
            answer[new_x][new_y] = 1
            visited[new_x][new_y] = 1
            dfs(new_x, new_y)

visited[0][0] = 1
dfs(0, 0)

if answer[m-1][n-1] == 1:
    print(1)
else:
    print(0)