// var str = "2017-05-16 13:45";
// // var str1 = "Hello Helo He";
// // var reg = /he/gi;
// // var str2 = "top gop hop sdf";
// // var reg = /[a-z]op/g;
// //var reg = /\d\s/g;
// var reg =/\d{2,}/g;
// console.log(str.match(reg));
// var human ={
//     name: "Vasya",
//     say: function (params) {
//         console.log(params+" "+this.name);
//     }
// };
// var human1 = human;
// human=null;
// human1.say("hello");
// function func(){
//     console.log("hi");
// }
// debugger
// window.func();

// function createObject() {

//     return {

//        first: function () {

//            return this;

//        },

//        second: function () {

//            return this;

//        }

//    }

// }

 
// {}.{}.{}
// createObject().first().second().second();

var str = "2017-05-16 13:45";
var reg =/\d{2,}/g;
var result = str.match(reg);
var temp=+result[1]-1;
console.error(temp);
var date = new Date(result[0],+result[1]-1,result[2],result[3],result[4]);
console.error(date);