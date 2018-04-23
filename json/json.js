// convert json object into object
// var obj = {
//     name:"Aamir"
// }
// var stringobj = JSON.stringify(obj);
// console.log(typeof obj);
// console.log(typeof stringobj);
// console.log(stringobj);

//convert string into json
// var personString = '{"name":"aamir","Age":25}';
// var  person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);
const fs = require('fs');

var originalNote = {
    title:"Apporio taxi",
    body:"Apporio Taxi Is taxi App which is use for booking cabs"
}
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.js',originalNoteString);

var noteString = fs.readFileSync('notes.js');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);