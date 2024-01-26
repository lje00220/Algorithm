n, m, t = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]
count = [[0] * n for _ in range(n)]
next_count = [[0] * n for _ in range(n)]
cnt = 0

# count 배열에 구슬의 위치를 표시
for _ in range(m):
    x, y = map(int, input().split())
    count[x-1][y-1] = 1

def in_range(x, y):
    return 0 <= x < n and 0 <= y < n

def move(x, y):
    dxs, dys = [-1, 1, 0, 0], [0, 0, -1, 1]

    max_num = 0
    max_pos = (-1, -1)
    
    for dx, dy in zip(dxs, dys):
        next_x, next_y = x + dx, y + dy

        if in_range(next_x, next_y) and arr[next_x][next_y] > max_num:
            max_num = arr[next_x][next_y]
            max_pos = (next_x, next_y)

    next_x, next_y = max_pos
    next_count[next_x][next_y] += 1

def move_all():
    # Next Count 값 초기화
    for i in range(0, n):
        for j in range(0, n):
            next_count[i][j] = 0
    
    for i in range(0, n):
        for j in range(0, n):
            if count[i][j] == 1:
                move(i, j)
    
    for i in range(0, n):
        for j in range(0, n):
            count[i][j] = next_count[i][j]

for _ in range(t):
    move_all()

for i in range(n):
    for j in range(n):
        if count[i][j] == 1:
            cnt += 1

print(cnt)