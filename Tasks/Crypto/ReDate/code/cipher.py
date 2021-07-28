from random import randint

s = ''

for i in range(100):
    s = s + chr(randint(1, 240))
print(s)