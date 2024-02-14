def plus(n,m):
    return n+m
def minus(n,m):
    return n-m
def divide(n,m):
    return n//m
def multiply(n,m):
    return n*m

a, o, c = input().split()
a, c = int(a), int(c)

if o == '+':
    print(f'{a} {o} {c} = {plus(a,c)}')
elif o == '-':
    print(f'{a} {o} {c} = {minus(a,c)}')
elif o == '/':
    print(f'{a} {o} {c} = {divide(a,c)}')
elif o == '*':
    print(f'{a} {o} {c} = {multiply(a,c)}')
else:
    print('False')