function camelCase(text) {
    text = text.trim();
    var ss = text.split(" ");
    ss[0] = ss[0].toLowerCase();
    var str = "";
    str += ss[0];
    var first;
    for (let i = 1; i < ss.length; i++) {
        if(ss[i] !== ""){
            ss[i] = ss[i].toLowerCase();
            first = ss[i].charAt(0);
            ss[i] = ss[i].replace(first, '');
            first = first.toUpperCase();
            str += first;
            str += ss[i];
        }

    }

    return str;
}

export default camelCase;