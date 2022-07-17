// your code here...
var nobat = 1;
var sss = document.querySelector('h2[class="game--status"]');
sss.innerText = 'It\'s X\'s turn';

var arr = [];
for (let i = 0; i < 9; i++) {
    arr.push('');
}

var count = 0;
var forw = true;

var cells = document.querySelectorAll('div.cell');
cells.forEach(function (item) {
    if (item) {
        item.addEventListener('click', function () {
            if (forw) {
                // if (sss.innerText !== 'Player O has won' && sss.innerText !== 'Player X has won') {
                //     for (let i = 0; i < 9; i++) {
                //         if (arr[i] !== '') {
                //             count++;
                //         }
                //     }
                //     if (count === 8) {
                //         sss.innerText = 'Game ended in a draw';
                //         forw = false;
                //     }
                // }

                if (arr[item.getAttribute('data-cell-index')] === '') {
                    arr[item.getAttribute('data-cell-index')] = nobat === 1 ? 'X' : 'O';
                    item.innerText = nobat === 1 ? 'X' : 'O';
                    nobat = nobat === 1 ? 0 : 1;
                    sss.innerText = nobat === 1 ? 'It\'s X\'s turn' : 'It\'s O\'s turn';
                }

                if ((arr[0] === 'X' && arr[3] === 'X' && arr[6] === 'X') || (arr[1] === 'X' && arr[4] === 'X' && arr[7] === 'X') || (arr[8] === 'X' && arr[2] === 'X' && arr[5] === 'X') || (arr[0] === 'X' && arr[4] === 'X' && arr[8] === 'X') || (arr[2] === 'X' && arr[4] === 'X' && arr[6] === 'X') || (arr[0] === 'X' && arr[1] === 'X' && arr[2] === 'X') || (arr[3] === 'X' && arr[4] === 'X' && arr[5] === 'X') || (arr[6] === 'X' && arr[7] === 'X' && arr[8] === 'X')) {
                    sss.innerText = 'Player X has won';
                    forw = false;
                } else if ((arr[0] === 'O' && arr[3] === 'O' && arr[6] === 'O') || (arr[1] === 'O' && arr[4] === 'O' && arr[7] === 'O') || (arr[8] === 'O' && arr[2] === 'O' && arr[5] === 'O') || (arr[0] === 'O' && arr[4] === 'O' && arr[8] === 'O') || (arr[2] === 'O' && arr[4] === 'O' && arr[6] === 'O') || (arr[0] === 'O' && arr[1] === 'O' && arr[2] === 'O') || (arr[3] === 'O' && arr[4] === 'O' && arr[5] === 'O') || (arr[6] === 'O' && arr[7] === 'O' && arr[8] === 'O')) {
                    sss.innerText = 'Player O has won';
                    forw = false;
                }


                if (sss.innerText !== 'Player O has won' && sss.innerText !== 'Player X has won') {
                    for (let i = 0; i < 9; i++) {
                        if (arr[i] !== '') {
                            count++;
                        }
                    }
                    if (count === 9) {
                        sss.innerText = 'Game ended in a draw';
                        forw = false;
                    }else{
                        count = 0;
                    }
                }


            }

            // for (let i = 0; i < 3; i++) {
            //     if (arr[i] === 'X') {
            //         count++;
            //     }
            //     if (count === 3) {
            //         sss.innerText = 'Player X has won';
            //         forw = false;
            //     }
            // }
            // count = 0;
            // for (let i = 3; i < 6; i++) {
            //     if (arr[i] === 'X') {
            //         count++;
            //     }
            //     if (count === 3) {
            //         sss.innerText = 'Player X has won';
            //         forw = false;
            //
            //     }
            // }
            // count = 0;
            // for (let i = 6; i < 9; i++) {
            //     if (arr[i] === 'X') {
            //         count++;
            //     }
            //     if (count === 3) {
            //         sss.innerText = 'Player X has won';
            //         forw = false;
            //
            //     }
            // }
            // count = 0;
            // for (let i = 0; i < 3; i++) {
            //     if (arr[i] === 'O') {
            //         count++;
            //     }
            //     if (count === 3) {
            //         sss.innerText = 'Player O has won';
            //         forw = false;
            //
            //     }
            // }
            // count = 0;
            // for (let i = 3; i < 6; i++) {
            //     if (arr[i] === 'O') {
            //         count++;
            //     }
            //     if (count === 3) {
            //         sss.innerText = 'Player O has won';
            //         forw = false;
            //
            //     }
            // }
            // count = 0;
            // for (let i = 6; i < 9; i++) {
            //     if (arr[i] === 'O') {
            //         count++;
            //     }
            //     if (count === 3) {
            //         sss.innerText = 'Player O has won';
            //         forw = false;
            //     }
            // }
            // count = 0;


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
    forw = true;
    count = 0;
    cells.forEach(function (item) {
        if (item) {
            item.innerText = '';
        }
    });
});



