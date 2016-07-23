import sys

def encrypt(src):
	s = ""
	for i in xrange(len(src)):
		c = src[i]
		t = ord(c)
		m = i % 9
		a = abs(m - 9) + 1
		t = t + m * a
		t = t % 256
		s += chr(t)
	encryptstr = marshal.dumps(s)
	encryptstr = zlib.compress(encryptstr, 9)
	return encryptstr

def decrypt(src):
	s = zlib.decompress(src)
	s = marshal.loads(s)
	encryptstr = ""
	for i in xrange(len(s)):
		c = s[i]
		t = ord(c)
		m = i % 9
		a = abs(m - 9) + 1
		t = t - m * a
		if t < 0:
			t += 256
		encryptstr += chr(t)
	return encryptstr