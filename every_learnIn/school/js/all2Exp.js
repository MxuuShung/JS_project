//進門招呼
function greet(){
    var greetNote = '你好，請問要點什麼餐?現在剩下最後8個漢堡呦!';
    document.getElementById('greetId').textContent = greetNote;
    console.log(greetNote);
}
greet();

//點餐回應      漢堡    可樂
function order(hamNum,cokeNum){
    var total = hamNum * 50 + cokeNum * 20;
    document.getElementById('totalId').textContent = total;
    console.log(total);
}
order(8,1);
order(85,14);
order(18,81);
order(68,13);
order(89,91);