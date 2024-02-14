n = int(input())

def magic_number(a):
    if a % 2 == 0 and (a//10 + a%10) % 5 == 0:
        return 'Yes'
    else:
        return 'No'
    
print(magic_number(n))