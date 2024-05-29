const sum=new Promise((resolve,reject)=>{
    let num=1+1;
  if(num==2){
    resolve("correct answer");
  }
  else{
    reject("wrong answer");
  }
  
});
sum.then((message)=>console.log(message));
sum.catch((error) =>console.log(error));