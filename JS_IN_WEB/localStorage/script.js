const localStorageKey = 'greeting';
const localStorageValue = 'سلام دنیا!';

var btn = document.querySelector('button#btn');

btn.addEventListener('click', function (item) {
    localStorage.setItem(localStorageKey, localStorageValue);

});

var rem = document.querySelector('button#remove');
rem.addEventListener('click', function () {
    localStorage.removeItem(localStorageKey);
});

var p = document.querySelector('p#result');
setInterval(function () {
    const test = window.localStorage.getItem(localStorageKey);

    if (test) {
        p.innerHTML = test;
    } else {
        p.innerHTML = '';
    }


}, 1000);

