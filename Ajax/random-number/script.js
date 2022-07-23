// your code here...
var divi = document.querySelector('div#price');

f();

setInterval(function (){
    fetch('http://localhost:3000/random', {
        method: 'GET'
    }).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw Error(response.status);
        }
    })
        .then((obj) =>{
            divi.innerText = obj.price;
        })
        .catch((error) => console.log(error));

}, 1000);

function f() {
    fetch('http://localhost:3000/random', {
        method: 'GET'
    }).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw Error(response.status);
        }
    })
        .then((obj) =>{
            divi.innerText = obj.price;
        })
        .catch((error) => console.log(error));

    // console.log(response.headers.get('price'));


}