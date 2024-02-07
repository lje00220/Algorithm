n, m = map(int, input().split())
arr = [[0 for _ in range(m)] for _ in range(n)]

def in_range(x, y):
    return 0 <= x < n and 0 <= y < m

dx, dy =[0, 1, 0, -1], [1, 0, -1, 0]
x, y = 0, 0
arr[x][y] = 'A'
dir_num = 0

for i in range(1, n*m):
    nx, ny = x + dx[dir_num], y + dy[dir_num]

    if not in_range(nx, ny) or arr[nx][ny] != 0:
        dir_num = (dir_num + 1) % 4
    
    x, y = x + dx[dir_num], y + dy[dir_num]
    arr[x][y] = chr(ord('A') + i)
    
for i in range(n):
    for j in range(m):
        print(arr[i][j], end=' ')
    print()