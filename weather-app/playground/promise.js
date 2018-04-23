var asynAdd = (a,b) =>{
 return new Promise((resolve,reject) =>{
    setTimeout(() =>{
        if(typeof a === 'number' && typeof b === 'number')
        {
            resolve(a + b);
        }else{
            reject('Arguments must be numbers');
        }
    },5000);
 });
};
asynAdd(4,6).then((res)=> {
    console.log(res);
    return asynAdd(res,'33');
}).then((res) =>{
   console.log(res);
}).catch((errorMessage) => {
   console.log(errorMessage);
});
// var somePromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve('hey.It worked');
//         reject('unable to fulfil');
//     },2000);
// });
// somePromise.then((msg) => {
//   console.log('Success:',msg);
// },(errorMessage) => {
//    console.log('Error :',errorMessage);
// });
