n, m = map(int, input().split())
arr = [[0 for _ in range(n)] for _ in range(n)]
dxs, dys = [0, 1, 0, -1], [1, 0, -1, 0]

def in_range(x, y):
    return 0 <= x < n and 0 <= y < n

for _ in range(m):
    x, y = map(int, input().split())
    x, y = x-1, y-1
    arr[x][y] = 1
    cnt = 0
    for dx, dy in zip(dxs, dys):
        nx, ny = x + dx, y + dy
        if in_range(nx, ny) and arr[nx][ny] == 1:
            cnt += 1
    if cnt == 3:
        print(1)
    else:
        print(0)