var farms = [
    {
        farmer: '卡斯伯',
        dogs: ['張姆士','龐的']
    },
    {
        farmer:'查理',
        dogs: ['PP'],
    }
];

//列出所有農場農夫的名子
var el = document.querySelector('.list');

var farmLen = farms.length;

for (var i = 0; i < farmLen; i++) {
    var str = document.createElement('li');//新增一個li元素，並無告訴他要掛在哪裡
    str.textContent = farms[i].farmer;
    //console.log(farms[i].farmer);//f=確認資料正確性 卡斯伯 查理
    el.appendChild(str);
}