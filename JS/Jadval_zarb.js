const number = +readline();

var tmp = 0;
for (let i = 1; i <= number; i++) {
    var ss = [];
    for (let j = 1; j <= number; j++) {
        ss[j - 1] = (tmp + 1) * j;
    }

    tmp++;
    console.log(ss.join(" "));
}