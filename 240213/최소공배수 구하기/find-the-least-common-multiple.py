n, m = map(int, input().split())

def lcm(a, b):
    for i in range(min(a,b), a*b+1, min(a,b)):
        if i % a == 0 and i % b == 0:
            print(i)
            break

lcm(n, m)