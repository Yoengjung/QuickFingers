rs = open(
    "C:\\Users\\user\\Desktop\\QuickFingers\\backend\\wordFile.txt",  encoding='UTF8')
ws = open(
    "C:\\Users\\user\\Desktop\\QuickFingers\\backend\\wordFile1.txt", 'w', encoding='UTF8')
s = []
index = 1
for line in rs:
    s = line.split(" ")
    r = s[0]
    print(r)
    ws.write("\"" + str(index) + "\":\"" + r + "\",\n")
    index += 1
