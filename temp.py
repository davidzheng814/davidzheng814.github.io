f = open('resources/resume2.svg', 'r')
text = f.read()
f.close()
newsvg = ""
onNum = False
num = ""
for char in text:
    if onNum:
        if char in ['0','1','2','3','4','5','6','7','8','9','.']:
            num += char
        else:
            newsvg += '%.5g' % (float(num)/1024*18) + char
            onNum = False
    else:
        if char in ['0','1','2','3','4','5','6','7','8','9']:
            num = char
            onNum = True
        else:
            newsvg += char
print newsvg