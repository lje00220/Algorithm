n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]
dp = [[0 for _ in range(n)] for _ in range(n)]

def initialize():
    dp[0][n-1] = a[0][n-1]

    for i in range(1, n):
        dp[i][n-1] = dp[i-1][n-1] + a[i][n-1]
    
    for i in range(n-2, -1, -1):
        dp[0][i] = dp[0][i+1] + a[0][i]

initialize()

#여기만 수정하면 됨
for i in range(1, n):
    for j in range(n-2, -1, -1):
        dp[i][j] = min(dp[i-1][j], dp[i][j+1]) + a[i][j]

print(dp[n-1][0])