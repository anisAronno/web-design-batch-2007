// string  ''/""
//nemeric 0-9
// true false 

var x= 10
var y= '20'

console.log(x+y)

var welcome='This is our final warning '

console.log(welcome+'samjid');
console.log(welcome+'Monjurul');
console.log(welcome+'Mazim');
console.log(welcome+'Alomgir Sheik');

 
var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits[3])
console.log(fruits.length);


console.log(fruits.length);

//+ - * / % ++ -- =
//  > <  == === && ||

var a=10;
var b=10;

if( a==b){
    console.log("this is right");
}else{
    console.log('This is wrong');
}

var userName='admin'
var password='12365'

// if(userName==='admin' && password===12345){
//     alert("You are log in")
// }else if(userName==='admin' || password===12345){
//     alert('One type matching, Please Try Again')
// } else{
//     alert('User Name or Password invalid')
// }

// if true
//else false

// true && true = true
// true && false = false
// true || false = true
// false || false = false

// loop === for , do while loop, while, foreach


// for (var i=0; i<100; i++) {
//     console.log( i + ' I am Here'); 
// }

// input procecing output



function demo(m, cb){
    sum= m+cb
    console.log(sum);
}

var cb =function(){
    x=10
    y=5
    z=x-y
    return z
}
var cbResult=cb()

demo(5,cbResult)

// demo(50,60)
// demo(50,10)
// demo(10,30)
// demo(10,30)
// demo(10,60)