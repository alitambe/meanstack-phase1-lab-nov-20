
//class
function Employee(name, designation, department){
    this.name=name; //Properties
    this.designation=designation;
    this.department=department;
}

//methods
Employee.prototype.add=function(){
    console.log("Adding to Database");
}

var emp = new Employee("Ali","Developer","Sr Mgr - IT");
console.log(emp);
emp.add();

    function Student(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    Student.prototype.add = function() {
        console.log('Add a new student')
    }
    Student.prototype.get = function() {
        console.log('return student')
    }
    Student.prototype.update = function() {
        console.log('update student')
    }
    Student.prototype.delete = function() {
        console.log('delete student')
    }
    var std = new Student("Ali", 30, "Mean");
    console.log(std);
    std.add();
    std.get();
    std.update();
    std.delete();