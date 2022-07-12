const input = readline().split(" ");

const isPrime = (num) =>{
    for (var i = 2; i < num;i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

const output = input.filter((el) => isPrime(el));

console.log(output.join(" "));