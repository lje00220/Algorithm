n = int(input())
cnt = 0

def func(idx):
    if idx == n:
        global cnt
        cnt += 1
        return

    for i in range(1, 5):
        if idx + i > n:
            break

        func(idx + i)
        
func(0)
print(cnt)