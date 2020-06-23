
var myBill = 1250;
var vip = false;
var andCheck = myBill > 1000 && vip == true;
var orCheck = myBill >1000 || vip == true;

document.getElementById('andId').textContent = andCheck;
document.getElementById('orId').textContent = orCheck;