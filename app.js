var hello = 'Hello World'
alert('Hello World');

var int1 = 1;
alert(int1);

var int2 = -10;
alert(int2)

var float1 = 3.14;
alert(float1)

var str1 = 'JavaScriptを覚えよう'
var str2 = '★頑張ってね～！！★'
alert(str1 + str2)

alert(4 + 3)
alert('Hello' + 'World')

var orange = 100;
var apple = 120;

if(orange < apple){
	alert('みかんの値段がりんごより安いよ！！！');
}
else if(orange == apple){
	alert('みかんとりんごは同じ値段だよ');
}
else{
	alert('残念ながらりんごんの方が高いよ。。');
}

var max = 100;
var num = 1;
var count = 0;

while(num < max){
	num = num * 2;
	count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

var i;
var num = 0;

for(i = 1; i < 11; i++){
	num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です')