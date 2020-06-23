var el = document.querySelector('.list');
var link = 'http://www.google.com';
var name = '查理';


el.innerHTML = '<li><a href="http://www.google.com">查理</il>';

//如果連結 與農夫名子，想做成變數更替
//                      利用'+ 變數 +'的方式帶入
el.innerHTML = '<li><a href="'+ link +'">'+ name +'</il>';

//進階用法                      利用陣列的方式帶入
el.innerHTML = '<li><a href="'+ link[i] +'">'+ name[j] +'</il>';