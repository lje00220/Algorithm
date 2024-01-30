n, m = map(int, input().split())
arr = list(map(int, input().split()))
combination = []
arr_xor = []


def xor():
    temp = 0
    for elem in combination:
        temp ^= elem
    arr_xor.append(temp)
    return arr_xor

    
# 방문한 원소들을 출력해줍니다.
def print_combination():
    for elem in combination:
        print(elem, end = " ")
    
    print()


def find_combination(curr_num, cnt):
    # n개의 숫자를 모두 탐색했으면 더 이상 탐색하지 않습니다.
    if curr_num == n:
        # 탐색하는 과정에서 m개의 숫자를 뽑은 경우 답을 출력해줍니다.
        if cnt == m:
            xor()
        return

    # curr_num에 해당하는 숫자를 사용했을 때의 경우를 탐색합니다.
    combination.append(arr[curr_num])
    find_combination(curr_num + 1, cnt + 1)
    combination.pop()

    # curr_num에 해당하는 숫자를 사용하지 않았을 때의 경우를 탐색합니다.
    find_combination(curr_num + 1, cnt)


find_combination(0, 0)
print(max(arr_xor))