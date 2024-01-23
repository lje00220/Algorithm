x, y = 0, 0
n = int(input())

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]
for _ in range(n):
    dir, dist = input().split()
    dist = int(dist)
    if dir == 'N':
        dir_num = 0
    elif dir == 'E':
        dir_num = 1
    elif dir == 'S':
        dir_num = 2
    else: 
        dir_num = 3

    x += dist * dx[dir_num]
    y += dist * dy[dir_num]

print(x, y)