def in_range(x, y):
    return 1 <= x <= n and 1 <= y <= n 

n, t = map(int, input().split())
x, y, dir = input().split()
x, y = int(x), int(y)
arr = [[0 for j in range(n)] for i in range(n)]

dx = [1, 0, 0, -1]
dy = [0, -1, 1, 0]

d = {
    'D': 0,
    'L': 1,
    'R': 2,
    'U': 3
}

dir_num = d[dir]

for _ in range(t):
    nx = x + dx[dir_num]
    ny = y + dy[dir_num]

    if in_range(nx, ny):
        x, y = nx, ny
    else:
        dir_num = 3 - dir_num

print(x, y)