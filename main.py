import crypto
def main():
    print(crypto.decrypt(open('./public/sw_ch_mi.txt', 'rb').read()))
if __name__ == '__main__':
    main()