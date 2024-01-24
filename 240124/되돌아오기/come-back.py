n = int(input())
x, y = 0, 0
dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]
d = {
    'E': 0,
    'S': 1,
    'W': 2,
    'N': 3
}
cnt = 0
answer = -1

for i in range(n):
    dir, dist = input().split()
    dir_num, dist = d[dir], int(dist)

    for _ in range(dist):
        x += dx[dir_num]
        y += dy[dir_num]
        cnt += 1

        if x == 0 and y == 0:
            answer = cnt
            break
            
    if x == 0 and y == 0:
        break

print(answer)