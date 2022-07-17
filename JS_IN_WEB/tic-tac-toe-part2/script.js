// your code here...
var nobat = 1;
var sss = document.querySelector('h2[class="game--status"]');
sss.innerText = 'It\'s X\'s turn';

var arr = [];
for (let i = 0; i < 9; i++) {
    arr.push('');
}

var cells = document.querySelectorAll('div.cell');
cells.forEach(function (item) {
    if (item) {
        item.addEventListener('click', function () {
            if (arr[item.getAttribute('data-cell-index')] === '') {
                arr[item.getAttribute('data-cell-index')] = nobat === 1 ? 'X' : 'O';
                item.innerText = nobat === 1 ? 'X' : 'O';
                nobat = nobat === 1 ? 0 : 1;
                sss.innerText = nobat === 1 ? 'It\'s X\'s turn' : 'It\'s O\'s turn';
            }
        });
    }
});

var res = document.querySelector('button[class="game--restart"]');

res.addEventListener('click', function () {
    for (let i = 0; i < 9; i++) {
        arr[i] = '';
    }
    nobat = 1;
    sss.innerText = 'It\'s X\'s turn';
    cells.forEach(function (item) {
        if(item){
            item.innerText = '';
        }
    });
});



