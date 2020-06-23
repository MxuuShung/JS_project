




console.log(a);//undefined
var a = 3;
console.log(a);//3

count();//可以運作到下方的function，因為Hoisting觀念，會把function放到最上面運作，優先運作

function count(){
    console.log('hello!');
}
