n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

def in_range(x, y):
    return 0 <= x < n and 0 <= y < n

dx = [1, -1, 0, 0]
dy = [0, 0, -1, 1]

answer = 0

for i in range(n):
    for j in range(n):
        cnt = 0
        for dir_num in range(4):
            nx = i + dx[dir_num]
            ny = j + dy[dir_num]

            if in_range(nx, ny) and arr[nx][ny] == 1:
                cnt += 1
        if cnt >= 3:
            answer += 1

print(answer)