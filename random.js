let numArray=[];
for(i=0;i<=10;i++){
    let num =Math.floor(Math.random() *999)+100;
    numArray.push(num);

}
console.log("array is " + numArray);

let first=numArray[0];
let second=numArray[0];
let firstMin=numArray[0];
let secondMin=numArray[0];

for(let number of numArray){
    if(number >first){
        second=first;
        first=number;
    }else if(number >second){
        second=number;
    }
    if(number<firstMin){
        secondMin=firstMin;
        firstMin=number;

    }else if (number<secondMin){
        secondMin=number;
    }
}
