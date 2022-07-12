var n = Number(readline());

var n1 = 0, n2 = 1;
var tmp;

new_list = [];
new_list[(0)] = 0;
new_list[1] = 1;
var i = 2;

if (n === 0 || n === 1) {
    console.log(0);
} else {
    while (n > 2) {
        tmp = n1 + n2;
        new_list[i++] = tmp;
        n1 = n2;
        n2 = tmp;
        n--;

        // console.log()
    }
    console.log(new_list.join(', '));
}
