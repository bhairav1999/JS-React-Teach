
// var data=10

// console.log(data)     //----->   10

// var data=20

// setTimeout(() => {
//     console.log("timer",data)     //----------> 20  ------> 30
// }, 2000);


// var data=30
// console.log("last",data)   //-----> 20  ------> 30





// --------------------Promise------------------>

// states


/*

pendings   ----> 8
fullfilled  ----> 10  
rejected   ----> errror

*/



// const data=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("some error occurred")
//     });
// })

// data.then((item)=>{
//     console.log(item)
// }).catch((err)=>{
//     console.log(err)
// })



// const data=fetch("https://jsonplaceholder.typicode.com/users")
//     data.then((user)=>{
//         return user.json()
//     }).then((result)=>{
//         console.log(result)
//     })



// async function greet(){
//     const data=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("data successfully")
//     },2000);

   

// })
// var a=await data
//    console.log(a)

// }
// greet()




//---------------this---------------------->


// console.log(this)  //----window


// function add(){
//     console.log(this)   //----->window
// }
// add()


// var obj={
//     id:1,
//     name:"raj",
//     sum:function () {
//        console.log(this)
//     }
// }
// obj.sum()



//------------------------------->


// "use strict";


//  a=10
// console.log(a)    


// function add(a,b){
//    return a+a
// }
// var d=add(10,20)
// console.log(d)




//-------------protype------------------->


// var obj={
//     name:"raj",
//     fname:"raj"
// }

// console.log(Object.keys(obj))


// var obj2={
//     age:20
// }


// obj._proto_=obj2

//------------call apply bind--------------------->   


// var obj={
//     id:1
// }

// function add(a,b){
//     console.log(a,b)
//     console.log(this)    // ----> 
// }
// add(10,20)



// add.call(obj,50,60)
// add.apply(obj,[80,90])

// var ahshdha=add.bind(obj,5,8)
// ahshdha()

//------------------------------------>





// var a={
//     id:1
// }
//   var data=Object.create(a) 
// console.log(data.id)



//---------------------------------------->


// document.cookie="fruits=mango; expires=fri, 3 mar 2023 12:00:00 UTC"


// localStorage.setItem("fruits", "mango")

// console.log(localStorage.getItem("fruits"))

// localStorage.removeItem("fruits")




//----------------------------------------------->









