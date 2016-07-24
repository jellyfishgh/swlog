import crypto

def main():
    # print(crypto.decrypt(open('./testdata/sw_ch_mi.txt', 'rb').read()))
    # src = open('./testdata/test.json', 'r').read()
    # print(src)
    # src = crypto.encrypt(src)
    # print(src)
    # open('./testdata/encrypt.txt', 'w').write(src)
    # src = open('./testdata/encrypt.txt', 'r').read()
    # print(src)
    # src = crypto.decrypt(src);
    # print(src)
    # open('./testdata/decrypt.txt', 'w').write(src)
    print(crypto.encrypt('hello'))
if __name__ == '__main__':
    main()