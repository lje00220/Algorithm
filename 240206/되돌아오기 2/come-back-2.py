order = input()

dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]
x, y = 0, 0
cnt = 0
res = -1
dir_num = 0

for elem in order:
    if elem == 'L':
        dir_num = (dir_num + 3) % 4
    elif elem == 'R':
        dir_num = (dir_num + 1) % 4
    else:
        x, y = x + dx[dir_num], y + dy[dir_num]

    cnt += 1

    if x == 0 and y == 0:
        res = cnt
        break

print(res)