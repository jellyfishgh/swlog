import zlib, marshal

txt = marshal.dumps('hello')
print(txt)
print(zlib.compress('hello', 9))