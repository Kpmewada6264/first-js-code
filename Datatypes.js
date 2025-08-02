/*
prefer not to use var because of issue in block scope and functional scope
*/

"use strict";   //treat all js code as newer version

// alert{"{hello"}    we are using node.js , not browser

console.log(3+3);  console.log(5+6)   //it will run but code readabilitiy should be high

// datatypes

let name="krishna"
let age=19
let isloggedin = false
let year

//number => 2 to power 53
// bigint
// string=>""
// boolean=>true/false
// null=>standalone value
// undefined=>
// symbol=>unique


// object

console.log(typeof name) //string
console.log(typeof year) //undefined
console.log(typeof null) //object
console.log(typeof isloggedin) //boolean
console.log(typeof age) //number