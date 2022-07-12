const [x, y] = readline().split(" ").map(n => +n);
const [x1, y1] = readline().split(" ").map(n => +n);

if(x > x1){
    console.log('Left');
}else{
    console.log('Right');
}