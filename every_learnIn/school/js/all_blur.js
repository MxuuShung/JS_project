
//typeof(hamNum) != Number
function count(){
    var hamPrice = 50;
    var cokePrice = 20;
    var hamNum = parseInt(document.getElementById('hamNumId').value)*hamPrice;
    var cokeNum = parseInt(document.getElementById('cokeNumId').value)*cokePrice;

    var hamValue = document.getElementById('hamNumId').value;
    var cokeValue = document.getElementById('cokeNumId').value;
    var total = document.getElementById('totalId');

    if(hamValue =='' || cokeValue == ''){
        alert('請填入數字');
    }else if(hamValue <=0 || cokeValue <=0){
        alert('請填入正數')
    }else{
        total.textContent = hamNum + cokeNum;
        console.log(total); 
    }


    function checkContent(e){
        var str = e.target.value;
        if(str ==''){
            alert('此欄位不可為空');
        }
    }
}

var el = document.getElementById('countId');
el.addEventListener('click',count,false);

//focus 所在焦點
//blur 離開焦點 

var ham = document.getElementById('hamNumId');
ham.addEventListener('blur',checkContent,false);

var coke = document.getElementById('cokeNumId');
coke.addEventListener('blur',checkContent,false);