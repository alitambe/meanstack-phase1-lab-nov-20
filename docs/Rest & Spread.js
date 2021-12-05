// Rest & Spread Operator (...)
//Rest - Combine Multiple elements into an array

//Spread - spreads an array into multiple elements

function add(a,b){
    console.log(a+b);
}

function addwithrest(...numbers){
let sum = 0;
for (let num of numbers){
    sum += num;
}
console.log(sum);
}

addwithrest(1);
addwithrest(1,2);
//addwithrest(1,2,3);
//addwithrest(1,2,3,4);

//Spread Operator

function addNames(){
    const name =["Person1","Person2","Person3"];
    const morenames=["Person4",...name];
    console.log(morenames);
}
//addNames();