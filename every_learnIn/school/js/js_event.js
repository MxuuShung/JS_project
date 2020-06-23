

var el = document.querySelector('.btn');
//function 裡帶入一個參數e 也可以event，都可以
el.onclick = function(e){
    console.log(e);//紀錄點擊時的資訊，根據你點擊的位置不同，紀錄的資訊也會跟著改變
    //舉例來說 當你按住Alt+點擊按紐時，e的MouseEvent事件裡，會有個altKey屬性
    //原本altKey屬性是false，而現在變成true(偵測你點擊當下的狀態並記錄)
    //記住，此資訊會自動帶入第一個參數， 但是!! 你要給function參數!!!
    //所以看到人家寫e，event，就是想要獲取此object的資訊
}


