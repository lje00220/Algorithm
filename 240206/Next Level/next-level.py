class Introduce:
    def __init__(self, user_id = 'codetree', level = 10):
        self.user_id = user_id
        self.level = level


first = Introduce()
print(f"user {first.user_id} lv {first.level}")

i, l = input().split()
second = Introduce(i, l)
print(f"user {second.user_id} lv {second.level}")