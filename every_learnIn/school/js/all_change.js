var area = document.getElementById('areaId');
var list = document.querySelector('.list');
var country = [
    {
        farmer: '查理',
        place: '前鎮區'
    },
    {
        farmer: '卡斯伯',
        place: '苓雅區'
    },
    {
        farmer: '小花',
        place: '前鎮區'
    }
];
var len = country.length;
console.log(len);
function updateList(e){
    //alert('chanGGGGGGGGGGGGGGGe!');
    var select = e.target.value;
    console.log(e.target.value);
    var str = '';
    for (var i = 0; i < len; i++) {
        //console.log(country[i].farmer);
        if(select == country[i].place){
            str += '<li>'+'農夫名子: '+country[i].farmer+'</li>'
        }
    }
    list.innerHTML = str;
}
area.addEventListener('change',updateList,false);
//如果當我點擊苓雅區時，顯示苓雅區的值