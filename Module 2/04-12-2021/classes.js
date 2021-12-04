class Employee{
    constructor (name, dept){
        this.name = name;
        this.dept=dept;
    }


    print(){
        console.log("Name : " + this.name+" | Dept : "+this.dept)
    }
}

const emp = new Employee("Ali Tambe", "Sr Mgr IT");
emp.print();
