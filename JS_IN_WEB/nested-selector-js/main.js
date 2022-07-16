var ss = document.querySelectorAll('div#container p');
ss.forEach(function (item) {
   if(item){
       item.style.color = 'indigo';
   }
});

var tmp = document.querySelector('div#container');
var s2 = tmp.nextElementSibling;
s2.style.color = 'indianred';
