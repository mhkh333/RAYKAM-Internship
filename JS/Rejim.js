const input = prompt();

var R = 0, Y = 0, G = 0;

for (var i = 0; i < input.length; i++) {
    if(input.charAt(i) === 'G'){
        G++;
    }else if(input.charAt(i) === 'R'){
        R++;
    }else{
        Y++;
    }
}

if(G === 0 || (R >= 3) || (R >= 2 && Y >= 2)){
    console.log('nakhor lite');
}else{
    console.log('rahat baash');
}
