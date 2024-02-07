n, m = map(int, input().split())
arr = [[0 for _ in range(m)] for _ in range(n)]

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

x, y = 0, 0

arr[x][y] = 1
dir_num = 2

def in_range(x, y):
    return 0 <= x < n and 0 <= y < m

for i in range(2, n*m+1):
    nx, ny = x + dx[dir_num], y + dy[dir_num] 

    if not in_range(nx, ny) or arr[nx][ny] != 0:
        dir_num = (dir_num + 3) % 4
    
    x = x + dx[dir_num]
    y = y + dy[dir_num]
    arr[x][y] = i

for i in range(n):
    for j in range(m):
        print(arr[i][j], end=' ')
    print()