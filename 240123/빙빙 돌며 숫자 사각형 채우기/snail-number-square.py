n, m = map(int, input().split())
arr = [[0 for j in range(m)] for i in range(n)]

def in_range(x, y):
    return 0 <= x < n and 0 <= y < m

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

x, y = 0, 0
dir_num = 0

arr[x][y] = 1

for i in range(2, n * m + 1):
    nx = x + dx[dir_num]
    ny = y + dy[dir_num]

    if not in_range(nx, ny) or arr[nx][ny] != 0:
        dir_num = (dir_num + 1) % 4

    x = x + dx[dir_num]
    y = y + dy[dir_num]
    arr[x][y] = i

for i in range(n):
    for j in range(m):
        print(arr[i][j], end=' ')
    print()