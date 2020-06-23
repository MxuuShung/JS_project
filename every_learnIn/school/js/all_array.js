

//農場  array 陣列 數組 Object 物件/對象

farmMaster = 'carsper';
farmdog1 = 'john';
farmdog2 = 'bob';
farmcorn1 = 7;
farmcorn2 = 10;

var cornField1 =8;
var cornField2 =5;
var cornField3 =6;

var cornField = [8,5,6]
var cornFieldNum = cornField[1];
console.log(cornField[0]);//從0開始 cornField[0]=8 cornField[1]=5 cornField[2]=6

var cornFieldNew = [];

cornFieldNew.push(5);//在陣列的最後加入一個值=5，由於是空陣列，故 => cornFieldNew[0] = 5;將5加入到陣列第一位
cornFieldNew.push(6);//cornFieldNew[1]=6;
cornFieldNew.push(7);//cornFieldNew[2]=7;
cornFieldNew.push('');
//改植
cornFieldNew[0] = 10;//將陣列第一位的值改成10 (原本是5)
console.log(cornFieldNew);
//取得陣列的總數(長度)
console.log('我總共有' + cornFieldNew.length + '玉米田');
