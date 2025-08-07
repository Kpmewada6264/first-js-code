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


const tinderuser=new Object();

console.log(tinderuser); // Will print an empty object {}

tinderuser.id="122433"
tinderuser.name="krishna";
tinderuser.isLoggedIn=true;

console.log(tinderuser); // Will print { id: '122433', name: 'krishna', isLoggedIn: true }


const regularuser={
    email:"krishna@gmail.com",
    fullname:{
        userfullname:{
        username:"rahul",
        lastname:"mewada"
        }
    }
}

console.log("--- regularuser ---");
console.log(regularuser.fullname.userfullname)

const object1={
    key1:"value1",
    key2:"value2",}
const object2={
    key3:"value3",
    key4:"value4",}

const object3={object1,object2}
console.log(object3); // Will print { object1: { key1: 'value1', key2: 'value2' }, object2: { key3: 'value3', key4: 'value4' } }

const object4=Object.assign({},object1,object2);
console.log(object4); // Will print { key1: 'value1', key2:

const object5=Object.assign(object1,object2);
console.log(object5); // Will print { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }

const object6={...object1,...object2};
console.log(object6); // Will print { key1: 'value1', key2:
const users=[
    {id:1,name:"krishna",email:"krishna@gmail.com"},
    {id:2,name:"raj",email:"raj@gmail.com"},
]

console.log(users[1].email)


console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log("-----",object1["key2"]); 

console.log(Object.values(tinderuser)); 

console.log(Object.entries(tinderuser)); // Will print an array of key-value pairs

console.log(tinderuser.hasOwnProperty("isLoggedIn")); // Will print true if the property exists, false otherwise
console.log(tinderuser.hasOwnProperty("username")); // Will print false if the property does not exist

