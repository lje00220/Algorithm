y = int(input())

def leap_year(n):
    if n % 4 == 0 and n % 100 != 0:
        return True
    if n % 400 == 0:
        return True

if leap_year(y):
    print('true')
else:
    print('false')