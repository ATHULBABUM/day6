/*var promise1=new Promise(function(resolve,reject){
    const x=10;
    const y=10;
    if(x===y){
        resolve();
    }else{
        reject();
    }
    
});
promise1.
then(function(){
    console.log('equal');
},
function(){
    console.log('not-equal');

});*/


async function f(){

let promise=new Promise(function(resolve,reject){
    const x=4;
    const y=2;
    setTimeout(()=>{
        if(x===y){
            resolve();
        }else{
            reject();}
        },1000)

    });
    
await promise.
then(function(msg){
    console.log('msg');
}).
catch(function(err){
    console.log('not-equal');
});
}
f();