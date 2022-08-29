function rearrange(array){
 console.log(array);
 let sort=array.sort(function(a,b){
    return a-b;
 });
 console.log(sort);
 let size=array.length;
 console.log("second largest" + sort[size-1-1] );
 console.log("second  smallest " + sort[1]);
    
}

let array=new Array();
for(let i=0;i<10;i++){
    let num =Math.floor(Math.random() *1000 );
    array.push(num);
}
rearrange(array);