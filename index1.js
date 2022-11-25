///javascript console API
console.log("Hello World");
console.warn("THis is warning");
console.error("thsi is error");

//document.write('this is paragraph')

//javascript variables
//what are variable_> container to store data value

//container use ==var

var number1 = 34;
var number2 = 56;
console.log(number1 + number2);

//data types in javascript
//number
var num1 = 455;
var num2 = 56.76;

//string
var str1 = "this is string";
var str2 = "this is also string";


//object

var marks = {
    anjali: 34,
    shubahm: 78,
    harry: 99.977,
}

console.log(marks)

//boolean
var a = true;
var b = false;
console.log(a, b)

///at a very high level , yher are two types in javascrpit
////1.primitive data types:undefined , null, number,string,boolean,stmbol
//2. reference data types:arrays, obejct

var arr = [1, 2, "anjali", 4, 5]

//console.log(arr)
//operators in javascript
//arithemtic operators
var a = 34;
var b = 56;
console.log("the valure pf a+b", a + b);
console.log("the valure pf a-b", a - b);
console.log("the valure pf a*b", a * b);
console.log("the valure pf a/b", a / b);

//assignment operator

var c = b;
//c+=2;
//c -=2; //c=c-2;
//console.log(c);

//comparison operators
var x = 55;
var y = 59;
//console.log(x ==y);
//console.log(x>=y);
//console.log(x>y);
//console.log(x<y);

//logical operators
//logical and
//console.log(true&& true)
//console.log(true&&false)
//console.log(false&&false)
//console.log(false&&true)
//logical or
//console.log(true|| true)
//console.log(true||false)
//console.log(false||false)
//console.log(false|true)
//logical not
//console.loh(!false);
//console.log(!true);


function avg(a, b) {
    return (a + b) / 2;

}
c1 = avg(5, 6);
c2 = avg(14, 16);
//console.log(c1,c2);

//conditional in javascript

var age = 114;
if (age > 18) {
    console.log('you can drink water');
}
//else{
// console.log('you cannot drink water');

//}
age = 25
//if-else ladder
//if(age>32){
//console.log("you r not kid");
//}
//else if(age>26){
//console.log("you r not kid nahi thr aap"); 
//}//
//else if(age>22){
//console.log("yes bachhe nahi rhe");
//}
//else if(age>18){
//console.log(" 18you bache nahi rhe");

//}
//else{
////console.log("bache nahi rhe");

//}
//console.log("End of ladder");

var arr = [1, 2, 3, 4, 5, 6, 7];
////console.log(arr);
//for(var i=0; i<arr.length;i++){
// console.log(arr[i])
//}

//arr.forEach(function(element){
//console.log(element);

//})

//while looep syantax//...................................
//const ac = 0;
//ac++;
//ac=ac+1;
let j = 0;
//while(j<arr.length){//
//console.log(arr[j]);
// j++
//}
//do {
//console.log(arr[j]);
//j++;
// }while (j < arr.length);

//break and contuine statement;;.........................................

//var arr=[1,2,3,4,5,6,7];
//for(var i=0;i<arr.length;i++){
////// if(i==3){
//break;
//continue;
//}
//console.log(arr[i]);
//}
//array methods.....................................................
let myArr = ["fan", "camera", 34, null, true];
//methods
//console.log(myArr.length);
//myArr.pop();..alast element remove
//myArr.push("harry");....add element
//myArr.shift();.....only remove 1st Element;
//myArr.unshift("harry");..add 1st element number
//const newlen=myArr.unshift("harry")....new length..
//console.log(newlen);
//console.log(myArr);


///strings methods in javascript
let myLovelyString = "Harry is good girl";
//console.log(myLovelyString.length)
//console.log(myLovelyString.indexOf("good"))
///console.log(myLovelyString.slice(1,4))
d = myLovelyString.replace("Harry", "Rohan");
//console.log(d,myLovelyString)
let mydate = new Date();
//console.log(mydate.getTime());
//console.log(mydate.getFullYear());
//console.log(mydate.getDay());
//console.log(mydate.getHours());


////......Document.....
//Dom Manipulation...
let elem = document.getElementById('click');
//console.log(elem);
let elemclass = document.getElementsByClassName("container")
//console.log(elemclass)
//elemclass[0].style.background="yellow";
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.add("text-success");

////console.log(elem.innerHTML);
////console.log(elem.innerText);

//console.log(elemclass[0].innerHTML);
//console.log(elemclass[0].innerText);

tn = document.getElementsByTagName('button')
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "this is created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "this is cretaed bold";
tn[0].replaceChild(createdElement2, createdElement);


//.....selcting usig query......................................
sel = document.querySelector('.container')
console.log(sel);
sel = document.querySelectorAll('.container')
console.log(sel);
///function in javascript..............................
function clicked() {
    console.log('THe button was clicked')
}
//event in javascript
//window.onload=function(){
    //console.log('the document was loaded')
//}
//firstcontainer.addEventListener('click',function(){
   // document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked</b>"
    ////console.log("click on container");
//})
//firstcontainer.addEventListener('mouseover',function(){
    //console.log("mouseover on container");
//}//)
//firstcontainer.addEventListener('mouseout',function(){
    //console.log("mouse out of container");
//})
//firstcontainer.addEventListener('mouseup',function(){
   // console.log("Mouse up when clicked on container");
//})
//firstcontainer.addEventListener('mousedown',function(){
    //console.log("mouse down when clicked on container");
//})

//Arrow Function..............................................................................
function sum1(a, b){
    return a+b;
    console.log(sum1);
}
//sum2=(a,b)=>{
   // return a+b;
   //console.log(sum2);
//}
logkaro=()=>{
    console.log("I am In ur log..");
}
//setTimeout functions............................................................................
//setTimeout(logkaro, 2000);
//setInterval(logkaro, 2000);
//clr=setTimeout(logkaro, 2000);
//use clearInterval(clr).clearTimeout(clr) to cancel setInterval/setTimeOut

//kavascript local storage;............... as save string
//localStorage.setItem("name","harry");
//localStorage
//localStorage.getTime("name")
//localStorage.removeItem('name')
//localStorage.clear();

//Json..................................................................
//obj={name:"harry", length:1}
//jso=JSON.stringify(obj);
//console.log(typeof jso);
//console.log(jso);
//parsed=JSON.parse{{"name":"harry","length":1,"a":{"this":tha\\"t"}}'}
//console.log(parse);

//Templet literals backticks
a=34;

console.log{'this is my ${a}'}






