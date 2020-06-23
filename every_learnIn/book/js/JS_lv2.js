var greeting = 'Howday';
var name = 'Molly';
var message = ',please check your order:';

var welcome = greeting + name + message;

var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//取得具有id屬性值為greeting的元件
var el = document.getElementById('greeting');
//個人化訊息替代元件
el.textContent = welcome;

//取得id屬性值為userSign的原件，並更新內容
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

//取得id屬性值為tiles的原件，並更新內容
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//取得id屬性值為subTotal的原件，並更新內容
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

//取得id屬性值為shipping的原件，並更新內容
var elSubTotal = document.getElementById('shipping');
elSubTotal.textContent = '$' + shipping;

//取得id屬性值為grandTotal的原件，並更新內容
var elSubTotal = document.getElementById('grandTotal');
elSubTotal.textContent = '$' + grandTotal;