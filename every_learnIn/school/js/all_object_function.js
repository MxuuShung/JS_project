//API 、後端資料庫 、 JSON時會用到


var farm = {
    farmer:'卡',
    chick:15,
    duck:3,
    dog:['joj','bob'],
    goDinner: function(){
        console.log(farm.farmer + '該回家吃晚飯');
    },
    poultryTotal: function(){
        var num = farm.chick + farm.duck;
        console.log('我的農場共有'+ num +'隻家禽');
    }
};
farm.goDinner();
farm.poultryTotal();
document.getElementById