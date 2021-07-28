def Crypt (t, i1, i2, i3, i4):
    s = ""
    for i in range(0, len(t) - 3, 4):
        if i % 16 == 0:
            s += '\n'
        s += t[i + i1] + " "
        s += t[i + i2] + " "
        s += t[i + i3] + " "
        s += t[i + i4] + " "
    return s

f = open('hex.txt', 'r')

st = ""
for el in f.readlines():
    st += el
st = st.split()

k = Crypt(st, 3, 0, 2, 1)
print(k)

f = open('encryptedvideo.txt', 'w')
f.write(k)

#   4 1 3 2