
var btn = document.querySelector('.btn');


//較新寫法          沒有加on 後面會講    //監聽!!!
btn.addEventListener('click',function(){
    alert('hello2');
},false)
/*
btn.onclick = function(){
    alert('hello');
};

function sayHello(){
    alert('hello');
};
*/