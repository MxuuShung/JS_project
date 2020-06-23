
//題目
/*
var obj = {
    a: 'a',
    1: 'b',
    '這是中文字': 'c',
    'b': 'd',
    '--some data': 'e'
}
str=[];
for(var i in obj){
    console.log('題目的obj[i]:'+obj[i]);
    str.push(obj[i]);
    console.log(obj[i]);
}
console.log(str);
//["b", "a", "c", "d", "e"]

//練習
var obj2 = {
    name:'Eric',
    age:27,
    sex:'man',
    work:'hello World',
    doIt:function playGame(){
        //do...
    }
}
str1 = [];
for(let i in obj2){
    let linshiObj = {};
    console.log('我舉例的obj2[i]:'+obj2[i]);
    linshiObj[i] = obj2[i];
    str1.push(linshiObj[i]);
}
console.log(str1);
//["Eric", 27, "man", "hello World", ƒ]

var array = ['a','b','c','d','e'];
var filterEmpty = array.filter(function(item,index,array){
    console.log(index);
    return index;
});
console.log(filterEmpty);


var obj = {
    a: 'a',
    1: 'b',
    '這是中文字': 'c',
    'b': 'd',
    '--some data': 'e'
}
var arr = ['a', '1', '這是中文字', 'b', '--some data']; 
  // 使用迴圈方法
  console.log(); // 請依序呈現出 "物件" 內的 a, b, c, d, e
for(let i =0;arr.length>i;i++){
    var str=arr[i];
    console.log(obj[str]);
}

var arr = ['a','b','c','d','e'];

var str='';

str =arr.forEach

var obj = {
    a: 'a',
    1: 'b',
    '這是中文字': 'c',
    'b': 'd',
    '--some data': 'e'
}
var arr = ['a', '1', '這是中文字', 'b', '--some data']; 
  // 使用迴圈方法
  console.log(); // 請依序呈現出 "物件" 內的 a, b, c, d, e
var array =[];
//arr.forEach(element => array.push(element));
//console.log(obj[array]);
arr.forEach(function(elem){
    console.log(obj[elem]);
});

//題目
var obj = {
    a: 'a',
    1: 'b',
    '這是中文字': 'c',
    'b': 'd',
    '--some data': 'e'
}
//建立一個陣列，其中包含所有的屬性名稱
var arr = ['a', '1', '這是中文字', 'b', '--some data']; 
//arr的第   0 , 1   ,2          ,3          ,4     稱之陣列的"索引值" 
for(var i =0;arr.length>i;i++){
    var str=arr[i];
    console.log(obj[str]);
    //console.log(typeof(obj[str]));
}//就得到 a b c d e 注意!!他們都是string
*/
/*解說板
for(預設一個新的變數i從0開始跑起，當小於陣列長度時跑程式，跑了幾次){
    //建立一個變數str 將 arr這個陣列的第[i]個位置，裝進去變數str陣列

    //舉例: var str = arr[0];    var str = arr[1];  var str = arr[2]; 
    //此時: var str =   'a';    var str = '1';      var str ='這是中文字';
    
    //最後  obj[str] = obj[a];  obj[str] =obj['1'];  obj[str] = obj['這是中文字'];
    //再對照上面的物件，參考DAY2老師說的3種取得方式 
    var obj = {
        a: 'a',
        1: 'b',
        '這是中文字': 'c',
        'b': 'd',
        '--some data': 'e'
    }
    //就得到了
    obj[a]='a';                 obj['1']='b';       obj['這是中文字']= 'c';
}

var VIPTotal = 200;
var hamburgerPrice = 50;
var friesPrice = 30;
var maryHamburgerNum = 0;
var maryFriesNum = 10;
var maryIsVIP;

maryIsVIP = (VIPTotal <= (hamburgerPrice*maryHamburgerNum + friesPrice*maryFriesNum)) || maryHamburgerNum >=1;
console.log("mary 的 VIP 條件為" + maryIsVIP);


//2
var VIPTotal = 200;
var hamburgerPrice = 50;
var friesPrice = 30;

const sum = (itemPrice, itemNum) => itemPrice*itemNum;
const requireItem = (itemNum) => itemNum >=1;

var markHamburgerNum = 2;
var markfriesNum = 4;
var markIsVIP;

markIsVIP = requireItem(markHamburgerNum) && sum(hamburgerPrice, markHamburgerNum) + sum(friesPrice,markHamburgerNum) >= VIPTotal

console.log("mark 的 VIP 條件為" + markIsVIP);



////2
var VIPTotal = 200;
var hamburgerPrice = 50;
var friesPrice = 30;

const sum = (itemPrice, itemNum) => itemPrice*itemNum;
const requireItem = (itemNum) => itemNum >=1;

var markHamburgerNum = 2;
var markfriesNum = 4;
var markIsVIP;

markIsVIP = requireItem(markHamburgerNum) || sum(hamburgerPrice, markHamburgerNum) + sum(friesPrice,markHamburgerNum) >= VIPTotal

console.log("mark 的 VIP 條件為" + markIsVIP);


//題目1
var VIPTotal = 200;
var memberPrice = 350;

if(VIPTotal <= memberPrice){
    console.log("您好，您以達到 VIP 門檻，這裡給您 VIP 會員卡 (遞上)");
}else{
    console.log("尚未達到 VIP 門檻");
}

//題目2
var VIPTotal = 200;
var hamburgerPrice = 50;
var friesPrice = 30

if(VIPTotal <= (hamburgerPrice*2 + friesPrice*2)){
    console.log("尊敬的客戶您好，您有達到 VIP 條件");
}else{
    var peopleTotal = hamburgerPrice*2 + friesPrice*2;
    console.log(`尊敬的客戶您好，您還差 ${VIPTotal-peopleTotal} 元，才有符合 VIP 條件哦~`);
}

//題目3
var hungryNum = 53;

if(hungryNum <= 20){
    console.log("主人公因為飢餓度在"+hungryNum+"，所以他決定去吃飯糰");
}else if(hungryNum <=40){
    console.log("主人公因為飢餓度在"+hungryNum+"，所以他決定去吃肉燥飯+貢丸湯");
}else if(hungryNum <=60){
    console.log("主人公因為飢餓度在"+hungryNum+"，所以他決定去吃麥當勞");
}else{
    console.log("主人公因為飢餓度在"+hungryNum+"，所以他決定去吃 99 元火鍋吃到飽");
}
*/
//瞭解參數、回傳等技巧
//熟悉物件參考的特性
//觀念在影音課程中的物件、函式章節內
/*
var town = {
    name: '真心鎮',
    resident: []
}
*/
/*
townData = {};
var town = {name:'孟軒',age:27};
var Ming = { name: '小明', age: 16 };
var Auntie = { name: '漂亮阿姨', age: 21 };

function addResident(t, res1, res2) {
    console.log(t);
    console.log(typeof(t));
    console.log(res1);
}
addResident(town, Ming, Auntie);
/*townData = addResident(town, Ming, Auntie);

console.log(townData === town);
  console.log(townData.resident); // 包含真心鎮的居民陣列資料*/

/*
var town = {
    name: '真心鎮',
    resident: []
}
var townData = {};
var Ming = { name: '小明', age: 16 };
var Auntie = { name: '漂亮阿姨', age: 21 };

function addResident(t, res1, res2) {
        townData = {
            name: '真心鎮',
            resident: []
        };
        townData.resident = [res1,res2];
        return townData;
}
townData = addResident(town, Ming, Auntie);
console.log(townData);
console.log(townData === town);
console.log(townData.resident); // 包含真心鎮的居民陣列資料
*/
/*
var arr = [{
    using: true,
    number: 5,
  },{
    using: false,
    number: 4,
  },{
    using: false,
    number: 3,
  },{
    using: true,
    number: 2,
  },{
    using: false,
    number: 1,
  },{
    using: true,
    number: 0,
  }];
  
  function saySomething(cb, a) {
    return cb(a);
  }
function cb(){
    for(var i =0;arr.length>i;i++){
        var str='';
        if(arr[i].using ===true){
            str+=arr[i];
            console.log(str);
            return str;
        }
        console.log(str);
    }
}
  var result = saySomething(function cb(){
    for(var i =0;arr.length>i;i++){
        var str='';
        if(arr[i].using ==true){
            str=arr[i].using;
            console.log(str);
            return str;
        }
    }
}, arr);
  console.log(result); // 結果必須為 520

var arr = [{
    using: true,
    number: 5,
},{
    using: false,
    number: 4,
},{
    using: false,
    number: 3,
},{
    using: true,
    number: 2,
},{
    using: false,
    number: 1,
},{
    using: true,
    number: 0,
}];

function greeting(cb) {
    console.log(cb);
}
function processUserInput(callback) {
    var cb ="" ;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].using == true){
            cb += arr[i].number;
        }
    }
    callback(cb);
}

processUserInput(greeting);

  var arr = [{
    using: true,
    number: 5,
  },{
    using: false,
    number: 4,
  },{
    using: false,
    number: 3,
  },{
    using: true,
    number: 2,
  },{
    using: false,
    number: 1,
  },{
    using: true,
    number: 0,
  }];
  
  function saySomething(cb, a) {
    return cb(a);
  }
function cb(a){
}
var result = saySomething(
    function cb(a){
        var str='';
        for (let i = 0; i < a.length; i++) {
            if(a[i].using==true){
                str += a[i].number;
                console.log(str);
            }
        }return str;
    }, arr);
console.log(result); // 結果必須為 520






//(function sayYouLoveMe() {
//    return console.log("loveYou");
//  })();
if(
    (function sayYouLoveMe(){
    return true;
    })()
){
    console.log("loveYou");
}
*/
//題目一
/*
var a = 1;
a+=1;//2
a+=5;//7
var b = 5;
console.log(a+b);
console.log(typeof(a+b));
//值:12     型別:Number


var c = 3;
var d = "hello";
console.log(c*d);
console.log(typeof(c*d));
//值:NaN    型別:Number

var e = 8 + 2 * "9";
console.log(e);
console.log(typeof(e));
//值:26     型別:Number

var f = 1;
var g = "2";
var h = 3;
console.log(f+g+h);
console.log(typeof(f+g+h));
//值:123    型別:string

//題目二

var total = 200;
var isVip = true;
console.log(total>=200 && isVip);
//true

var a = true;
var b = false;
console.log( a && b);
//false
console.log( a || b);
//true


var c = 10;
var d = 20;
var e = 30;
console.log(c==10 && d>=5 && e !== 20);
//true
console.log(c==10 || d>=5 || e !== 20);
//true
console.log(c==5 || d>=40 || e !== 30);
//false
console.log(e!==30 || d>=40 || c == 10);
//true
//條件判斷的c e對調時，則答案不同


//千古難 題三
var maryIsVIP = true;
if(maryIsVIP){
    console.log("哇貴婦餒！");
}else{
    console.log("你一定搞錯了，叫你們店長出來！");
}
//印出 哇貴婦餒！


var momSwim = false;
var girlfriendSwim = true;
//來自女友的靈魂拷問...
//小杰，我跟你媽掉進河裡你會救誰？？？
if(momSwim && girlfriendSwim){
    console.log("都不救，因為他們都會游泳");
}else{
    console.log("小杰大喊：「你們誰不會游泳啊？？」");
    if(girlfriendSwim){
        console.log("那你自己游上來！");
    }else{
        console.log("我先問我阿母會不會游泳！");
    }
    
    if(momSwim){
        console.log("媽妳先自己游上來！");
    }else{
        console.log("媽我去救你！");
    }
}
/*印出 
*小杰大喊：「你們誰不會游泳啊？？」
*那你自己游上來！
*console.log("媽我去救你！");


//題目1
var hamburgerPrice = 50;
var friesPrice = 40;
var bobTotal;

function checkTotal(customName, hamNum, friNum) {
    bobTotal = (hamburgerPrice * hamNum + friesPrice * friNum);
    return `${customName} 您好，你詢問的金額總計為${bobTotal}元`
}
checkTotal("Jax", 1, 2);//舉例
checkTotal("Riven", 1, 3);
checkTotal("Kayn", 2, 2);
console.log(checkTotal("Bob", 3, 3));


//題目2
var hamburgerPrice = 50;
var friesPrice = 40;
var markWallet = 200;
var markTotal;

function checkMoney(customName,markWallet,hamNum,hamNum){
    markTotal =hamburgerPrice*hamNum + friesPrice*hamNum;
    if(markWallet >=markTotal){

        return `${customName} 買完東西後，消費了${markTotal}，錢包剩下${markWallet -markTotal}元`
    }else{
        return(`親愛的客戶${customName}，您的餘額不足，是否改用現金付款～`)
    }
}
console.log(checkMoney("Eric",500,3,1));
console.log(checkMoney("Joe",150,1,2));
console.log(checkMoney("Mark",200,2,2));

//題目3
var hamburgerPrice = 50;
var friesPrice = 40;
var sale = 0.9;
var maryWallet = 5000;
var maryTotal;

function checkMoney2(customName,customMoney,hamNum,friesNum,itemSale){
    maryTotal = (hamburgerPrice*hamNum + friesPrice*hamNum)*itemSale;
    if(customMoney>=maryTotal){
        console.log(`${customName} 買完東西後，打了${itemSale}折後，一共消費了${maryTotal}，錢包剩下${customMoney -maryTotal}元`);
    }else{
        const customMoneyInsufficient = Math.abs(customMoney -maryTotal);
        console.log(`親愛的客戶${customName}，您的餘額不足！扣除餘額後，還需現金支付${customMoneyInsufficient}元，是否用現金付清剩餘款項～`);
    }
}

checkMoney2("Mary",maryWallet,5,5,sale);
checkMoney2("Eric",maryWallet,100,100,sale);
checkMoney2("Faker",maryWallet,1,1,sale);

//Math.abs(a - b); 函式會回傳一個數字的絕對值
//https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/abs


//十一關 師傅舊疾復發時仍鞭策弟子學習，竟是不想付錢 WTF～
//選擇B...　小杰緩緩從兜裡掏出一本筆記，大喊一聲筆來，頓時文思泉湧.....%%%%
//題目1

var salary = 23500;
//function命名意思貼近功能!!
function deductSalary(moneyPenalty) {
    salary -= moneyPenalty;
    return salary
}
console.log(deductSalary(1000));//22500
console.log(deductSalary(3500));//19000
console.log(deductSalary(500));//18500



//題目2
var giftNum = 3;
var customerA = 150;
var customerB = 99;
var customerC = 110;
var giftGive = 100;//門檻設定100
function checkPay(customerPay) {
    if(customerPay >= giftGive){
        return(`消費達標，贈送贈品，日前贈品數量 ${giftNum-=1} 個`);
    }else{
        return (`未達標，目前贈品數量 ${giftNum} 個`);
    }
}
console.log(checkPay(customerA));//2
console.log(checkPay(customerB));//未達標，2
console.log(checkPay(customerC));//1

*/
/*
//題目3
var giftNum = 200;
var friesPrice = 30;
var hamburgerPrice = 50;

function giveGift(customerName,friesNum,hamNum) {
    let customerTotal = hamburgerPrice*hamNum + friesPrice*friesNum;
    giftNum -= Math.floor(customerTotal/50);
    if(customerTotal>=50 && giftNum>0){
        console.log(`親愛的 ${customerName} 您好，您一共得到 ${Math.floor(customerTotal/50)} 個贈品`);
        return (`老闆 ! 贈品還夠 ! 剩下 ${giftNum} 個`);
    }else if(giftNum>0){
        return (`金額未達標..，目前剩下 ${giftNum} 個`);
    }else{
        return ("老闆~贈品賣完拉～");
    }
}
console.log(giveGift("Marry",10,10));//184
console.log(giveGift("Bob",1,0));//184
console.log(giveGift("Tim",20,15));//157



/*
將 MingMoneyTransfer 的資料依序加入於 Auntie 的 depositRecord 內
加總 depositRecord 內的數值
將加總的數值加入至 deposit 上

var Auntie = {
    name: '漂亮阿姨',
    age: 21,
    deposit: 10000,
    depositRecord: [
        {
            title: '開戶',
            amounts: 10000
        }
    ]
};

var MingMoneyTransfer = [
    {
        title: '漂亮姨姨',
        amounts: 777
    },
    {
        title: '我是',
        amounts: 7000
    },
    {
        title: '真心的',
        amounts: 70000
    }
]

for (let i = 0; i < MingMoneyTransfer.length; i++) {
    let AuntieGet = MingMoneyTransfer[i];
    let AuntieMoneyGet = Number(MingMoneyTransfer[i].amounts);
    Auntie.deposit += AuntieMoneyGet;
    Auntie.depositRecord.push(AuntieGet);
}
console.log(Auntie);
console.log(Auntie.depositRecord);
*/


/*
var giftNum = 3;
function giveVV(money){
    var msg = money < 100 ? "SORRY" : "give";
    if(giftNum > 0){
        msg = "目前"+(money < 100 ? giftNum : --giftNum);
    }
    return msg;
}
console.log(giveVV(150));
console.log(giveVV(100));

//A有100元，花了20元，A花了多少?

var aMoney = 100;
var aPay = 20;
var aTotal;
function checkMoney(num1,num2){
    aTotal = num1 - num2;
    return aTotal;
}
checkMoney(aMoney,aPay);
console.log(aTotal);
//80
*/
/*新手組
//低於10000，不借
//1001~10000 年利率20%
// 10001~100000 年利率15%
// 100001 年率立10% //loan貸款
var remainingMoney = 5000000;
var profit = 0; //收益
var money;
var interestRate = 1;//利率
var input = document.querySelector('#input');
var submitBtn = document.querySelector('#submit');
var resultText = document.querySelector('#result');
var oneYear = document.querySelector('#oneYears');
var twoYears = document.querySelector('#twoYears');
var threeYears = document.querySelector('#threeYears');
var loanBtn = document.querySelector('#loanBtn');
var remaining = document.querySelector('#remaining');
var profit = document.querySelector('#profit');
//loanBtn.disabled = true;//不借
var peopleLoan ;
//預設500W
remaining.textContent = remainingMoney;
console.log(remaining);
//試算
function tryCalculate() {
    peopleLoan = Number(input.value);
    if(peopleLoan <1000){
        loanBtn.disabled = true;//按鈕鎖住
        resultText.innerHTML = "不借!";
    }else if(peopleLoan >1000 && peopleLoan <10001){
        oneYear.innerHTML = peopleLoan*1.2
        twoYears.innerHTML = peopleLoan*1.2*1.2
        threeYears.innerHTML =peopleLoan*1.2*1.2*1.2
    }
}
//利率
function loanMoney() {
    
}

loanBtn.addEventListener('click',loanMoney,false);
submitBtn.addEventListener('click',tryCalculate,false);

  //day12 
  var areaOne = document.querySelector('.keyItem1 img');
  var areaThree = document.querySelector('.keyItem3');
  var areaFour = document.querySelector('.keyItem4');
  //setAttribute 設定屬性
  areaOne.setAttribute('src','https://hexschool.github.io/JSTraining/stage12/1.png');
  areaThree.innerHTML ='<img src="https://hexschool.github.io/JSTraining/stage12/3.png">';
  console.log(areaFour.style);
  areaFour.style.backgroundImage = "url('https://hexschool.github.io/JSTraining/stage12/4.png')";
  //3345678
*/


/*
以下為 BMI 計算方式：

BMI 計算為：體重(公斤) / 身高的平方(單位為公尺)
例如 150 公分 50 kg = 50/(1.5*1.5) = 22.2 BMI 指數
BMI 數值狀態如下
體重過輕：BMI ＜ 18.5
正常：18.5≦BMI＜24
過重：24≦BMI＜27
輕度肥胖：27≦BMI＜30
中度肥胖：30≦BMI＜35
重度肥胖：BMI≧35
目前現況

function calculationBMI(height,kg){
    var bmi = kg / (height/100 * height/100)
    if(bmi < 18.5){
        console.log("體重過輕");
    }else if(bmi < 24){
        console.log("正常");
    }else if(bmi < 27){
        console.log("過重");
    }else if(bmi < 30){
        console.log("輕度肥胖");
    }else if(bmi < 35){
        console.log("中度肥胖");
    }else {
        console.log("重度肥胖");
    }
}

  console.log(calculationBMI(178,70));


saySomething  ="小姐我好餓啊～～～";//表達式 有動作 賦值 分號
(function () {
  console.log(saySomething);
  //立刻執行 無法在函式外被執行
  //限制變數作用域
})();

//丟入一個表達式，再加個()使其函式執行，()意指void，裡面可以加入參數
//像這樣，因為
(function (a) {
    console.log(a);
  })(saySomething);

//利用函式跟物件都是傳參考的方式~
var mingHungry = {
};
//函式表達使 mingHungry 物件多了一個屬性saySomething 值為 "小姐我好餓啊～～～"(字串)
//再利用IIFE接力將mingHungry物件內的 saySomething的值 列印出來
(function (oh) {
    oh.saySomething= "小姐我好餓啊～～～";
})(mingHungry);

(function (QQ) {
    console.log(QQ.saySomething); 
})(mingHungry);


首先 函式(具名函式)
宣告        函式名稱  (參數){表達式}
function doSomething (a){a = 1}  
//如果沒有宣告函式名稱，則需要呼叫時會找不到參考路徑

函式表達式
    //將函式物件 賦予給 變數B (因為是物件，賦予參考路徑)(又因此函式物件沒有名稱，稱之匿名函式)
var B = function(){}
//變數B 指向 等號後面的函式物件的參考路徑，所以使用 變數B 時，會運作 變數B指向的函式
var B = function nameB(){}
//變數 B 跟 nameB是不一樣的東西， B指的是 等號後面的函式參考位置
//                          nameB指的是，命名nameB的 函式調用時的參考位置(才找的到此函式)
//但我們已經用一個變數 B 去
*/



/*
## 6/22：Day 11

暫時失去了 JavaScript 能力的小明，流落到了真心鎮的郊外，在好心女孩的幫助下獲得些許的休息，也為幾小時沒有進食的胃得到了飽足。

經過介紹，這名女孩叫做小美，是少見未接受訓練就掌握 JS ES6 技能的神童，小美發現小明心煩意亂，雖然具有不錯的 JS 基礎，但是在煩躁的情況下沒有辦法輕鬆運用所學技巧。

ES6 的能力是屬於 JavaScript 升級版，能夠使用簡短的語法達到相同的功能，甚至更能夠減少原本 JavaScript 所發生的問題。因此，善良的小美決定傳授 ES6 的技巧給予小明，讓小明可以渡過這次的難關。

難過的小明也在小美家白吃白住了下來，並且開始學習 ES6 的技巧

第一關：透過 ES6 中的 let、const 穩固心境。

任務：
- 觀看影音課程中的「Let, Const」兩個相關章節
- 將以下的**變數改為使用 let, const 宣告**，以符合後方的修改條件（不可都使用 let）


// 請將此段 var 宣告改為 let, const
const Ming = '小明';
const MingAge = 16;
let MingLocation = '真心鎮';
const person = {
  name: '小明',
  location: '真心鎮'
}
let wallet = {
  money: 1000
}

MingLocation = '真心鎮郊外';
person.location = '真心鎮郊外';
wallet = {};

if(bmi < 18.5){
//所有滿足 bmi < 18.5時執行...
}else if(bmi < 24){
    //因為所有小於18.5的 bmi都在第一個if執行
    //剩下所有不滿足 18.5的(>=18.5)的 bmi 去執行if(bmi < 24) 
    //所以小於18.5的都在第一個if時執行了，所以才可以省略不寫
}



function calculationBMI(height,kg){
    var bmi = kg / (height/100 * height/100)
    if(bmi < 18.5){
        console.log("體重過輕");
    }else if(bmi < 18.5 && bmi < 24){
        console.log("正常");
    }else if(bmi < 27){
        console.log("過重");
    }else if(bmi < 30){
        console.log("輕度肥胖");
    }else if(bmi < 35){
        console.log("中度肥胖");
    }else {
        console.log("重度肥胖");
    }
}


var height = document.querySelector('.height');
var kg = document.querySelector('.kg');
var send = document.querySelector('.send');
var bmiDOM = document.querySelector('.BMI');
var statusDOM = document.querySelector('.status');
var BMIData = {
    "overThin":{
        class:"blue",
        statusText:"體重過輕"
    },
    "normal":{
        class:"orange",
        statusText: "正常"
    }
}
function calculationBMI(){
    var thisHeight = parseInt(height.value);
    var thisKg = parseInt(kg.value);
    var bmi = thisKg / (thisHeight / 100 * thisHeight / 100)
    if (bmi > 20) {
        render("normal",bmi)
    } else {
        render("overThin",bmi);
    }
}

function render(status,bmiText){
    bmiDOM.textContent = bmiText;
    statusDOM.textContent = BMIData[status].statusText;
    statusDOM.classList.add(BMIData[status].class);
}

send.addEventListener("click",function(){ 
    calculationBMI();
})
*/


var send = document.querySelector('.send');
var total = document.querySelector('.total');
var BMIResult = document.querySelector('.BMI');
var BMIStatus = document.querySelector('.status');
var height;
var weight;
var BMINum;
send.addEventListener('click',calculateBMI);

//結果清空
BMIResult.textContent = '';
BMIStatus.textContent = '';

function calculateBMI() {
    height = parseInt(document.querySelector('.height').value)/100;
    weight = parseInt(document.querySelector('.kg').value);

    console.log(parseInt(document.querySelector('.height').value)/100);
    console.log(typeof(parseInt(document.querySelector('.height').value)/100));
    console.log(parseInt(document.querySelector('.height').value/100));
    console.log(typeof(parseInt(document.querySelector('.height').value/100)));


    BMINum = weight/(height*height);
    console.log(BMINum);
    BMINum = BMINum.toFixed(2);
    BMIResult.textContent = BMINum;
    console.log(BMINum);
    console.log(typeof(BMINum));


//BMI狀態
if(weight<=0 || height<=0){
    BMIStatus.textContent = "操作有誤";
    console.log(BMINum);
    console.log(typeof(BMINum));
}else if(BMINum < 18.5){
    BMIStatus.textContent = "abcde1";
}else if( BMINum < 24){
    BMIStatus.textContent = "abcde2";
}else if(BMINum < 27){
    BMIStatus.textContent = "abcde3";
}else if(BMINum < 30){
    BMIStatus.textContent = "abcde4";
}else if(BMINum < 35){
    BMIStatus.textContent = "abcde5";
}else {
    BMIStatus.textContent = "abcde6";
    console.log(BMINum);
    console.log(typeof(BMINum));
}
}

isRefrigerator: true後面可以不用逗號(最後)
checkOutEnd:"12:00",(後面還有屬性需，)