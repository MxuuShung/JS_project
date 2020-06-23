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
var el = document.querySelector('.list');
var farmLen = farms.length;
console.log(farmLen);//利用cosole去確認自己取值是否正確
var str = '';//用來塞入新陣列


/*錯誤示範，這樣只會抓取到最後一個，也就是 查理，應該要由陣列帶入
    因為會把資料刪除乾淨，再帶入新的資料
for (var i = 0; i < farmLen; i++) {
    var content = '<li>'+ farms[i].farmer +'</li>';//撈值
    el.innerHTML = content;
}
*/
for (var i = 0; i < farmLen; i++) {
    var content = '<li>'+ farms[i].farmer +'</li>';//撈值
    str +=content;
    console.log(str);
}
el.innerHTML = str;