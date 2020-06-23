var el = document.querySelector('.link');
el.addEventListener('click',function(e){
    //preventDefault() 取消元素默認行為，但是但是一樣事件會傳遞，只是取消事件的預設行為(可以取消的話)，例如:a 點連結會跳轉到指定網頁
    //多用於a 連結 submit表單遞交，先透過我的JS去查看有無錯誤，再post去傳送
    e.preventDefault();
    e.stopPropagation();//只執行自己這層(因為是false，所以最內層)，此層外的冒泡事件，不運作~
    console.log(e);
},false)

