const data = [
    'Teal',
    'SkyBlue',
    'DarkSeaGreen',
    'Purple',
    'LightPink',
    'Crimson'
];
const defaultColor = 'Silver';

// your code here...
var sel = document.querySelector('select#color-select');

for (let i = 0; i < data.length; i++) {
    var tmp = document.createElement('option');
    tmp.innerText = data[i];
    tmp.value = data[i];
    sel.append(tmp);
}

var bc = document.querySelector('div#box');

sel.addEventListener('change', (event) => {
     // Selected Color
    bc.style.backgroundColor = event.target.value;
    setTimeout(silver, 1000);
});

function silver() {
    bc.style.backgroundColor = 'Silver';
}

