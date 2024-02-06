class Secret:
    def __init__(self, code, place, time):
        self.code = code
        self.place = place
        self.time = time

c, p, t = input().split()

answer = Secret(c, p, t)

print('secret code : ' + answer.code)
print('meeting point : ' + answer.place)
print('time : ' + answer.time)