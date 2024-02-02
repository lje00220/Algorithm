n = int(input())

dp = [0 for _ in range(n+2)]

for i in range(1, n+2):
    if i < 5:
        dp[i] = 1
    else:
        dp[i] = dp[i-2] + dp[i-3]
 
print(dp[n]%10007)