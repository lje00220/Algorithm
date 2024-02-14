n = int(input())

def hap(n):
    result = 0
    for i in range(1, n+1):
        result += i
    return result // 10

answer = hap(n)
print(answer)