var express = require('express');
var app = express();

app.get('/',(req,res) => {
   res.send({error:'Page not found',name:'Todo App v1.0'});
});
app.get('/user',(req,res) => {
    res.send([{name:'Amir',age:25},{name:'Andrew',age:25},{name:'jen',age:26}]);
});
app.listen(3000);
module.exports.app = app;