n, m, k = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]
temp = arr

min_num = n

# 블럭의 최대 깊이 구하기
for col in range(k-1, k+m-1): # 0열 ~ 2행
    cnt = 0
    for row in range(n):
        if arr[row][col] == 0:
            cnt += 1
        else:
            break
    if min_num >= cnt:
        min_num = cnt

# 블럭 채우기
for col in range(k-1, k+m-1):
    for row in range(min_num-1, min_num):
        arr[row][col] = 1

        

# print
for i in range(n):
    for j in range(n):
        print(arr[i][j], end=' ')
    print()

# 블록의 시작위치부터 아래로 탐색을 해서 cnt를 초기화
# cnt가 가장 적은 곳 위에다가 블록을 설치