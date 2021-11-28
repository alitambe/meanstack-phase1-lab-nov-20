const empid = (function(){
    let count = 0;
    return function(){
        ++count;
       // return `emp${count}`;
       return "emp" + count; 
    };
})();

console.log("Emp01:"+empid());
console.log("Emp02:"+empid());
console.log("Emp02:"+empid());