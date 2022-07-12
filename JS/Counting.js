export function solver(n) {
    var str = n.toString(2);
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if(str.charAt(i) === '1'){
            counter++;
        }
    }

    return counter;
}