// singleton

//object literals

const mysym=Symbol("key1");
const jsuser={ 
    name:"krishna",
    age:35,
    [mysym]:"mykey1",
    "full name":"krishna mewada",
    email:"kp@gmail.com",
    isloggedIn:false,
    lastlogin:["monday","tuesday","wednesday"],

}

console.log(jsuser.email);

console.log(jsuser["name"]);
//console.log(jsuser."full name"); // This will cause an error
console.log(jsuser["full name"]);

console.log(jsuser[mysym]); 

jsuser.email="krishna@gmail.com";
console.log(jsuser.email);

//Object.freeze(jsuser); // Prevents any changes to the object

jsuser.email="krishnarajput@gmail.com";
console.log(jsuser.email); // Will still print "


jsuser.greeting=function() {
    console.log("Hello, " );
}

console.log(jsuser.greeting); // Will print the function definition     

jsuser.greetingtwo=function(){
    console.log(`Hello, jsuser ${this.name}`);
}

console.log(jsuser.greeting()); // Will print "Hello, "
console.log(jsuser.greetingtwo()); // Will print "Hello, jsuser krishna"


console.log(jsuser.greeting);//[Function (anonymous)]

