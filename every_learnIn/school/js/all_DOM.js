document.getElementById('titleId').textContent = '1234';
//優化
var el = document.getElementById('titleId');
el.textContent = '12345';
//這樣一來el 就代表 document.getElementById('titleId') 你所抓取到的titleId標籤，
//而el.後面的屬性假設你分段設定，在打上面落落長就很麻煩，el取代之後書寫效率大提升

//物件 elq 被賦予 網頁的query選擇器的 id=titleId
var el1 = document.querySelector('#titleId');

//物件 elq 被賦予 網頁的query選擇器的 id=titleId
var el2 = document.querySelector('.titleClass');
el2.textContent = '1234567'+'<em>'+1+'</em>';

//如果現在要修改<em>12</em>時
var el2 = document.querySelector('.titleClass em');
el2.textContent = '123';

//假設你要修改h1裡面的em的話，則會出問題，因為前面已經修改過h1，而修改h1權限 大於 h1裡的em，所以17行無作用


//getElementById('');//專門用來選取ID
//querySelector('');則是網頁元素選擇器，並沒有專門用來存取某一元素