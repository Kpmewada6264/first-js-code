const name="krishna"
const repocount=50
//console.log(name+repocount+"value");

//string interpolation

console.log(`hello my name is ${name} and my repo count ${repocount} `);

console.log(`hello my name is ${name.length} and my repo count ${repocount} `);

const gamename= new String('Krishna')

console.log(gamename[0]);

console.log(gamename.__proto__);

console.log(gamename.toUpperCase());

console.log(gamename.charAt(3));

console.log(gamename.indexOf('i'));

const newstring=gamename.substring(2,5)
console.log(newstring);

const anotherstr=gamename.slice(-5,6)   //can use nagative value

console.log(anotherstr);


const stringone="  krishna  "

console.log(stringone);

console.log(stringone.trim());


const stringtwo="https://krishna.com/krishna%20mewada"

console.log(stringtwo.replace('%20','-'))

console.log(stringtwo.includes('sunder'));



console.log(gamename.split("s"));


