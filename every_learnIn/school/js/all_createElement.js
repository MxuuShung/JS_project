//在網頁上面新增一個節點，但是並沒有告訴他要掛在哪裡
var str = document.createElement('em');//增加了<em></em>標籤
str.textContent = '1234';//添加了內容，在em 標籤內=>1234

str.setAttribute('class','blue');//善用之前學習，新增css在哪裡? 在h1標籤


//希望把她掛在h1裡面的話，appendChild()意思為新增加一個子節點。
document.querySelector('.title').appendChild(str);


//那，是否會覆蓋原先內容呢?


//答案是，並不會，會在原先內容後面加入內容，跟innerHTML不一樣!!
//BBBBBBBBBBBBBBBBBBBUT，如果加入setAttribute的話，原先內容不會吃到css標籤，所以需要注意，
//那如果你要在前面插入呢? 暫未公布ˋXD

//補充2 這種寫法會比innerHTML來的還要安全