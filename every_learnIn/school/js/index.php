<!DOCTYPE html><!--網頁格式-->
<html lang="en"><!--網頁標籤包住所有內容-->
<head><!--head包住css、JS標籤-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<input type="text" class="height" placeholder="請輸入您的身高(公分)">
<input type="text" class="kg" placeholder="請輸入您的體重(公斤)">
<input type="button" class="send" value="計算">
<p class="total">您的 BMI 指數為 
  <span class="BMI">22</span>，
  狀態是 <span class="status">正常</span></p>


<script>
/*
var btn = document.querySelector(".send");
    btn.addEventListener('click',calculationBMI,false);

    function calculationBMI(height,kg){
    var height = parseFloat(document.querySelector(".height").value);
    var kg = parseFloat(document.querySelector(".kg").value);
    var pEl = document.querySelector(".total");

    if(height === height && kg === kg ){
        let bmi = (kg / (height/100 * height/100)).toFixed(1);
        let status
        if(bmi < 18.5){
            status = "體重過輕";
        }else if(bmi < 24){
            status = "正常";
        }else if(bmi < 27){
            status = "過重";
        }else if(bmi < 30){
            status = "輕度肥胖";
        }else if(bmi < 35){
            status = "中度肥胖";
        }else {
            status = "重度肥胖";
    }
    pEl.innerHTML = `您的 BMI 指數為 ${bmi} ，狀態是 ${status}`
    }else{
        pEl.innerHTML = `您的 BMI　指數非常正常，建議多吃大魚大肉少運動，歡迎下次再光臨本醫院～`
    }
}
*/
</script>



    <script src="./text.js"></script>
</body>
</html>