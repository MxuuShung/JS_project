var perfer = '拉麵';

function eat(food){
    console.log('我現在要去吃'+food);
}

//switch 效能比elseif好，elseif城市渲染時都會看過一次 switch則是先看條件，再決定要跑哪個case
switch(perfer){ //設立一個表達式 switch() 且包含一個條件
    case '牛排':
        eat('牛排');
        break;
    case '生菜沙拉': //case: 後方就會開始比對，如果符合就會值相關連的程式碼
        eat('生菜沙拉');
        break;//每個case:後方皆會補上break;來阻止已完成的區塊後方繼續執行
    default:
        eat('拉麵'); 
        break;
}