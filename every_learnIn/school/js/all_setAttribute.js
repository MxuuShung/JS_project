
var el = document.querySelector('.titleClass a');
//setAttribute 設定屬性
el.setAttribute('href','http://google.com');

//設定index頁面裡的.str屬性，並新增id進去，使物件吃到原本沒有的屬性
var el2 = document.querySelector('.str');
el2.setAttribute('id','strId');
//取得屬性 利用getAttribute
var el3 = document.querySelector('.titleClass a ').getAttribute('href');
console.log(el3);
//http://google.com
var el3 = document.querySelector('.titleClass a ').textContent;
console.log(el3);
//title
var el3 = document.querySelector('.titleClass a ').innerHTML;
console.log(el3);
//title
var el3 = document.querySelector('.titleClass').innerHTML;
console.log(el3);
//<a href="http://google.com">title</a>
//MDN註解
//getAttribute() 函式會回傳該網頁元素的屬性。 如果該屬性不存在，其回傳值會是null或 "" (空字串); 詳見 Notes 。
//var attribute = element.getAttribute(attributeName);