function encrypt(str, n) {
    const ascii = (c) => String(c).charCodeAt(0);
    const chr = (c) => String.fromCharCode(c);

    var string = "";
    var tmp;
    var ss;
    if (n > 25)
        n %= 26;
    for (let i = 0; i < str.length; i++) {
        tmp = ascii(str.charAt(i));
        if(tmp >= 65 && tmp <=90){
            tmp += n;
            if(tmp > 90){
                tmp -= 26;
            }
        }else{
            tmp += n;
            if(tmp > 122){
                tmp -= 26;
            }
        }

        ss = chr(tmp);
        string += ss;
    }
    return string;

}

function decrypt(str, n) {
    return encrypt(str, 26 - (n % 26));
}


export { encrypt, decrypt };
