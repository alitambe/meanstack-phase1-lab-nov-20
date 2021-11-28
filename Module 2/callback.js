//Print Command after data saved successfully to DB (Callback)
const printcb = function print(){
    console.log("Data successfully Added");
}

//Parameters
function node_add(){
    const data = {name:"Ali Tambe"};
    db_add(data,printcb)
}

//adding Parameters to Database
function db_add(data, cb){
    //Add data to Database
    //executing callback function
    cb();
}

//execute function
node_add();