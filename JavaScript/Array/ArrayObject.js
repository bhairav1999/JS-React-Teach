


// var  a="ABC123XYZ456"


// var b=a.replace(/\D/g, "")
// console.log(b)

// var b=a.replace(/[0-9]/g, "")


// console.log(b)


//----------------------------------------->   


// var a="ganesh"

// var b=a.match(/[aeiou]/g).length;

// console.log(b)
// console.log(a)



///------------------------------>

// var a=[1,2,3,4, "raj"  , true , null]

// console.log(a)

//----------------------------------->


/*


length --> find length
indexOf --> check index num
lastindexof --> chech last index
includes --> check only values --> true or false
concat --> join two array



push --> Add last element
pop --> Remove last element
shift --> Remove first element
unshift --> Add first elemet

slice
splice


reverse
sort

tostring
join

map
foreach
find
filter
reduce
some
every

*/

// var a=["raj" , "raj1", "raj1"]
// var b=a.lastIndexOf("raj1")
// console.log(b)


// var a=["raj" , "raj1", "raj1"]
// var b=a.indexOf("raj1")
// console.log(b)


// var a=["raj" , "raj1", "raj1"]
// var b=a.includes("raj2")
// console.log(b)


// var a=["raj" , "raj1", "raj1"]
// var b=a.concat("raj3")
// console.log(b)




// var a=[1,2,6,45,45]
// var b=a.push(46)
// console.log(a)
// console.log(b)


// var b=a.pop()
// console.log(a)

// var b=a.unshift(0)
// console.log(a)


// var b=a.shift()
// console.log(a)


// push --> Add last element
// pop --> Remove last element

// shift --> Remove first element
// unshift --> Add first elemet



// ----->  slice  , splice 


//---------->   slice

// var a=[1,2,3,5] 

// var b=a.slice(1,3)
// console.log(b)
// console.log(a)

//--------splice

// var b=a.splice(0,0,"raj")
// console.log(b)
// console.log(a)


// task

// var a="i am raj"

//  i raj

//---------------->   

//------------>



// var a=[22221,2,3,4,56,85,95,6,7,8,9,10,11]


// var b=a.reverse()
// console.log(b)


//------> 

// var b=a.sort((h,j)=>j-h)
// console.log(b)


//----------------->

// Er_BR_CR


// var a=[1,2,3,4,5,6,7,8,9,10]

// console.log(a.join("_"))




// map
// filter
// reduce
// some
// every

// var a=[1,2,3,4,5,6,7,8,9]
// var b=a.map((item)=>item*2)


// console.log(a)
// console.log(b)


// var a=[1,2,3,4,5,6,7,8,9]
// var b=a.filter((item)=>{
//     return item%2==1
    
// })
// console.log(b)
// console.log(a)


// var a=[1,2,3]
// var b=a.reduce((h,h1)=>{
//     return h*h1
// })
// console.log(b)


// 1*2=2*3=6




// var a=[1,2,3,4,5,6,7,8,9]
// var b=a.every((item)=>{
//     return item >1
// })
// console.log(b)


// //  1>1    every el  


// var z=[1,2,3,4,5,6,7,8,9]
// var y=z.some((item)=>{
//     return item >5
// })
// console.log(y)

// // 1>5

// // 6>5 



// --------->  

// var a={
//    //key : "value" 
//     id:1,
//     name:"amol"
// }
// console.table(Object.keys(a));
// console.table(Object.values(a));
// console.table(Object.entries(a));

// console.table(a.id);
// console.table(a.name);


// Object.seal(a)
// Object.freeze(a)

// a.name="ganesh"
// console.table(a);  // allow modifications

// a.age=25
// console.table(a);   /// 

// delete a.name

// console.table(a);



// var a={
//      id:1,
//      name:"amol",
//      address:{
//         city:"pune"
//      }
//  }



//   shallow clone
//  var b={...a}
//  b.name="ganesh"
//  console.table(a);
//  console.table(b);


//  var ganesh=JSON.parse(JSON.stringify(a))
//  ganesh.name="jhon"
//  ganesh.address.city="mumbai"


//  console.table(a);
//  console.table(ganesh);


//--------------------------------------------->

//----------------regular function------------------------


// functionkeyword  functionname(){
//     hghfhg
// }
// functionname()

//------------------------------------------->


// function add(a){
//     console.log(a)
// }
// add("raj")

//------------------Function Expression----------------------
 
// var add1=function(){
//     console.log("raj")
// }

// add1()

//----------- construction f---------------------->

// var add2=new function(){
//     console.log('raj')
// }

//-------------Arrow f---------------->


// var add4=a=>{
//     console.log(a)
// }
// add4("raj")

//-------------------------------------------->



// ------------------------------>


// function greet(){
//     return 100
// }
// var a=greet()
// console.log(a)



// function add(name,callbacks){
//     console.log(name)
//     callbacks()
    
// }

// function add1(){
//     console.log("hello callbacks")
    
// }

// setTimeout(add ,2000, "raj" , add1)

// function add1(){
//     var count=0
//     function add(){
//          return count +=1
//     }
//     return add
    
// }


// var a=add1()
// setInterval(function(){
//     console.log(a())
// })


//----------currying----------------->


// function greet (a){
//     return function(b){
//         console.log(a+b)
//     }
// }
// greet(10)(20)



//---------------iife-------------------------->


// (function add(){
//   console.log("hiiii")
// })()


// function add2(){
//     return 100
// }

// ----------------rest ---------------->


// function add(...a){
//     console.log(a)
// }
// var a=add(10,10,20,30,40,50,)
// console.log(a)



// ------------spred---------------->


// var a=[1,2,3,4,5]

// var b=["first" , ...a, "last"]

// console.log(b)




// var obj={
//     id:1,
//     name:"raj",
//     city:"pune"
// }


// const {id,name,city}=obj   //---------------> dest

// console.table(id);
// console.table(name);
// console.table(city);



// add()
// function add(){
//     console.log("hiii")
// }



//-------------------------->


// lrt var const


// let v1 = 1;

// v1 = 30;

// console.log(v1);  


// var let const



// {
//     let a=10
//     console.log(a)
// }











;













