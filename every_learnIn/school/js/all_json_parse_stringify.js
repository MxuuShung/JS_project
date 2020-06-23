//1.將 array 轉成 string
//2.將 string 轉成 array
//因為 localstorage 只會保存 string資料

var country = [
    {farmer:'卡斯伯'}
];

localStorage.setItem('countryItem',country);
var getData = localStorage.getItem('countryItem');
console.log(typeof(getData));//string 
console.log(getData);//"[object Object]"

//使用JSON.stringify
var countryString = JSON.stringify(country);//array->string
localStorage.setItem('countryItem',countryString);
console.log(countryString);//[{"farmer":"卡斯伯"}]

var getData1 = localStorage.getItem('countryItem');
console.log(typeof(getData1));//String 從localstorage存取皆是String
console.log(getData1);//[object Object]


//使用JSON.parse
var getDataArray = JSON.parse(getData1);

console.log(typeof(getDataArray));//物件
console.log(getDataArray);
console.log(getDataArray[0].farmer);//第0筆的農夫資料
