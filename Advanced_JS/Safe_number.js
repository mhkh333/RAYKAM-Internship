export function securePhoneNumbers(text) {
    // var ss = /(^d)*(((09)[0-9]{9})?(^d))*/;
    // var ss = /[\+]?(09)\d{9}\D?/gi;
    // if(!ss.test(text)){
    //     return text;
    // }

    // var reg = /(?<= |^)((09)[0-9]{9})(?= |$)/
    var pattern = /[\+]?(09)\d{9}\D?/gi;

    if(text.match(pattern)){
        var str = text.match(pattern);
        var akbar = [];
        for (let i = 0; i < str.length; i++) {
            akbar[i] = str[i];
        }
        for (let i = 0; i < str.length; i++) {
            var tmp = str[i];
            var sub = tmp.substr(4,3);
            str[i] = str[i].replace(sub, '***');
        }
        for (let i = 0; i < akbar.length; i++) {
            text = text.replace(akbar[i], str[i]);
        }
    }

    return text;
}

// console.log(securePhoneNumbers('There is no phone number is this line.'));