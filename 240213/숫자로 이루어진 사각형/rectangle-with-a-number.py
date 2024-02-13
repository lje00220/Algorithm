def print_square(n):
    num = 1
    for i in range(1, n*n+1):
        print(num, end=' ')
        if i % n == 0:
            print()
        num += 1 
        if num == 10:
            num = 1

n = int(input())
print_square(n)