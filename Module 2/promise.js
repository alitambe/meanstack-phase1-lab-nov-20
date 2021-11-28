//Parameters
function node_add(){
    const data = {name:"Ali Tambe"};
    //calling asynchronous
    db_data().then(
        (value)=>{
            console.log(value);
        },
        (err)=>{
            console.log("Error Occured");
        }
    );
}

function db_data(){
    return new Promise((resolve, reject)=>{
        resolve("Success");
    })
}

node_add();