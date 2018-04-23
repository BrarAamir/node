console.log('starting Application');
// const fs = require('fs');
// const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
var filterarray = _.uniq(['aamir',1,'aamir',1,2,'Aamir']);
console.log(filterarray);
// console.log(_.isString("Aamir"));
// console.log(_.isString(123));
// var user = os.userInfo();
// var res = notes.addNote();
// console.log(res);
// var res = notes.add(3,88);
// console.log(res);

// fs.appendFile('greatings.txt',`Hello ${user.username} Your Age is ${notes.age}!`,(err)=>{
//     if(err) throw err;
//     console.log("the data append");
// });
// fs.appendFile('greatings.txt','Hello'+user.username+'!',(err)=>{
//     if(err) throw err;
//     console.log("the data append");
// });