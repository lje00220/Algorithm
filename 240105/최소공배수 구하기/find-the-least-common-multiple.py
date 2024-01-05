n, m = map(int,input().split())

def find_min(x, y):
    i = 1
    while True:
        if (x*i)%y == 0:
            return x*i
        else:
            i += 1

print(find_min(n,m))