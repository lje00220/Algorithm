n = int(input())
arr = list(map(int, input().split()))

arr.sort()

edge = arr[0] + arr[-1] 
center = arr[n-1] + arr[n] 

if edge >= center:
    print(edge)
else:
    print(center)