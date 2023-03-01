// var varibalename=1

// document.write(varibalename)

// //-------------operator-------------------->

// // arthematic

// var a=10
// var b=20

// console.log(a+b)

// // sub

// console.log(a-b)

// //  multiplication

// console.log(a*b)

// //  division

// console.log(a/b)

// // mod

// console.log(a%b)

// ------increment

// ++a---> pre increment  +1
// --a---> pre decrement  -1
// a++ ---> post decrement  10
// a-- ---> post decrement   10

// var z=10

// console.log(z++)
// console.log(++z)
// console.log(z)

// console.log(z--)
// console.log(--z)
//  console.log(z)

// ------------>   logical

// and &&   --->

// var a=true
// var b=false

// console.log(a && b)

// or  --->
// var a=true
// var b=false

// console.log(a || b)

// not

// var a=true
// console.log(!a)

// ----------> comparison

// doubble  ==

// var a=10   //==num
// var b=20  // string

// console.log(c)
// console.log(c)

// not equal
// console.log(a==b)
// console.log(a!=b)

// var a=20
// var b=20

// // console.log(a>=b)
// console.log(a<=b)

//--------------------->   ternory----->

//     // 20>10
// var b=age>10 ? "true" : "false"

// console.log(b)

//---------------------->

// var age=20
// if(age>10){
//     console.log("true")
// }else{
//     console.log("false")
// }

//----------switch sta----------------->

// var day = 4

// switch (day) {
//   case 1:
//     day = "sunday";

//     break;
//   case 2:
//     day = "mon";

//     break;
//   case 3:
//     day = "tue";

//     break;
//   case 4:
//     day = "wed";

//     break;

//   default:
//     day="unknown";
//     break;
// }

// document.write(`todays day ${day}`);




//--------------------------------->



// console.log(a)
// console.log(a)
// console.log(a)
// console.log(a)
// console.log(a)
// console.log(a)
// console.log(a)
// console.log(a)
// console.log(a)
// console.log(a)
// console.log(a)
// console.log(a)

// var a=6
//     // 6<5
// while (a<5) {
//    console.log(a) 
//    a++
// }


// for(var a=0; a<10 ; a++){
//    if(a<5){
//     break;
   
//    }
//    console.log(a)
   
// }

//--------------------------->

//  data 


//  primitive

/*

1 number 
2 boolean
3 undefined
4 null
*/


// var a=10e5
// console.log(typeof a)


// 2 boolean

// var a=true
// var b = false

// console.log(a)
// console.log(b)


// var a;
// console.log(typeof a)


//  null

// var a=null

// console.log( typeof a)


// console.log(null==undefined)  //---> true
// console.log(null===undefined)  //--> false


//   string 



//  " "
//  ''
// ` `


/*
length
typeof
valueof()
indexof()
lastindexof()
search()
includes()
charAt()
concat()
replace()
repete()
slice()
split()
trim()
toUppercase()
toLowercase()

*/



// console.log(a.length

// console.log(a.valueOf())



//  indexof

//---> o start index number


// var b=a.indexOf("a")
// console.log(b)

// var b=a.lastIndexOf("a")
// console.log(b)


// var b=a.includes("raj")
// console.log(b)


// chaAt

// var b=a.charAt(6)
// console.log(b)



// concat

// var a="i am modi"

// var b=a.concat(" in pm of india")
// console.log(b)


//  

// var a="123ABC456XYZ"
// o/p--->   123456
// o/p -->  ABCXYZ


// var a="i am raj"
// var b=a.repeat(10)
// console.log(b)


// ---->   slice()



// var a="i am raj"

// var b=a.slice(2,4)
// console.log(b)


//  split 

// var a="i am raj"

// var b=a.split(" ,")
// console.log(b)



// ---->  trim()   


// var a="            i am raj"

// console.log(a.trim())


//  templet letrals
// var a=`i am raj
// i am rahul`
// console.log(a)


// uppercase

// var a="I AM RAJ"

// // console.log(a.toUpperCase())
// console.log(a.toLowerCase())



// var a={
//     name:'raj'
// }
//  var b=a

//  console.table(a);
//  console.table(b);

// b.name="ganesh"

// console.table(a);
// console.table(b);



// ---->

// var a=10

// var b=a

// console.log(a)
// console.log(b)
// a=20
// console.log(a)
// console.log(b)



// ----> 

// console.log(false==="0")

// let a=10
// let b=a

// console.log(a)
// console.log(b)
// b=90
// console.log(a)
// console.log(b)


// let arr={
//     a:"rak",
//     b:{
//         d:"amol"
//     }

// }

// var k=JSON.parse(JSON.stringify(arr))
// k.a="an"
// k.b.d="ra"

// console.table(arr )
// console.table(k  )



// program to count the number of vowels in a string

// function countVowel(str) { 

//     // find the count of vowels
//     const count = str.match(/[aeiou]/g).length;

//     // return number of vowels
//     return count;
// }

// // take input
// const string = prompt('Enter a string: ');

// const result = countVowel(string);

// console.log(result);

// var str="bhairav"
// const count = str.match(/[aeiou]/g).length;
// console.log(count)




