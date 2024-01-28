n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

def in_range(x, y):
    return 0 <= x < n and 0 <= y < n

def move(x, y):
    dxs, dys = [-1, -1, 0, 1, 1, 1, 0, -1], [0, 1, 1, 1, 0, -1, -1, -1]

    temp = arr[x][y]
    max_num = 0
    max_pos = (-1, -1)
    
    for dx, dy in zip(dxs, dys):
        next_x, next_y = x + dx, y + dy

        if in_range(next_x, next_y) and arr[next_x][next_y] > max_num:
            max_num = arr[next_x][next_y]
            max_pos = (next_x, next_y)

    next_x, next_y = max_pos
    arr[next_x][next_y] = temp
    arr[x][y] = max_num



        
for _ in range(m):
    for i in range(1, 17):
        cnt = 0   
        for row in range(n):
            for col in range(n):
                if arr[row][col] == i:
                    move(row, col)
                    cnt += 1
                if cnt != 0:
                    break
            if cnt != 0:
                break

for i in range(n):
    for j in range(n):
        print(arr[i][j], end=' ')
    print()