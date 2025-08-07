//Array

const arr = [1, 2, 3, 4, 5,"kp","karthik",true,false,undefined,null];
 
console.log(arr);

console.log(arr[5]);

console.log(arr.length);

const myheros= ["spiderman", "thor", "hulk", "ironman"];
const myarr=new Array(1,2,3,4,5);

console.log(myheros[2]);

//Array Methods

myarr.push(5);
myarr.push("karthik");
console.log(myarr);

myarr.pop();
console.log(myarr);


myarr.unshift(9);
console.log(myarr);


myarr.shift();
console.log(myarr);

myarr.pop();
console.log(myarr);


console.log(myarr.includes(3));

console.log(myarr.indexOf(9));

console.log(myarr.indexOf(3));

const newarr=myarr.join();

console.log(myarr);
console.log(newarr);
console.log(typeof newarr);

//slice ,splice

console.log("A " ,myarr);

const myn1= myarr.slice(1, 3);
console.log(myn1);

console.log("B " ,myarr);


const myn2= myarr.splice(1, 3);   //manipulates the original array
console.log("C " ,myarr);   

console.log(myn2);      


