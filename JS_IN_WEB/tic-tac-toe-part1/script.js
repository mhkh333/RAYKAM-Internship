// your code here...
var nobat = 1;
var sss = document.querySelector('h2[class="game--status"]');
sss.innerText = 'It\'s X\'s turn';

function in_cell(item) {

}

var cells = document.querySelectorAll('div.cell');
cells.forEach(function (item) {
    if(item){
        item.addEventListener('click', function(){
            item.innerText = nobat === 1 ? 'X' : 'O';
            nobat = nobat === 1 ? 0 : 1;
            sss.innerText = nobat === 1 ? 'It\'s X\'s turn' : 'It\'s O\'s turn';
        });
    }
});