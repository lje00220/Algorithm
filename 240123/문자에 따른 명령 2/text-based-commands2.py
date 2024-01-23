dir = list(input())
x, y = 0, 0
dir_num = 3
dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]
for i in range(len(dir)):
    if dir[i] == 'R':
        dir_num = (dir_num + 1) % 4
    elif dir[i] == 'L':
        dir_num = (dir_num + 3) % 4
    else:
        x += dx[dir_num]
        y += dy[dir_num]
print(x, y)