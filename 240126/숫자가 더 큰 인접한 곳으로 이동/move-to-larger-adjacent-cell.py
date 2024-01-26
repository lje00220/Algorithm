n, x, y = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

def in_range(x, y):
    return 0 <= x < n and 0 <= y < n

curr_x, curr_y = x-1, y-1
max_num = arr[curr_x][curr_y]
max_pos = (-1, -1)
dxs, dys = [-1, 1, 0, 0], [0, 0, -1, 1]
print(max_num, end=' ')

while True:
    for dx, dy in zip(dxs, dys):
        next_x, next_y = curr_x + dx, curr_y + dy

        if in_range(next_x, next_y) and arr[next_x][next_y] > max_num:
            max_num = arr[next_x][next_y]
            max_pos = (next_x, next_y) # (2, 1)
            print(max_num, end=' ')
            break

    if max_num == arr[curr_x][curr_y]:
        break
    curr_x, curr_y = max_pos