//Arrow function
// (parameters) => {<body>}

const functionPrint = (num1,num2)=>console.log(num1*num2);

functionPrint (10,20);

function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}
Student.prototype.add = () => console.log('add a new student')
Student.prototype.get = () => console.log('return a student')
Student.prototype.update = () => console.log('update student')
Student.prototype.delete = () => console.log('delete a student')
var s = new Student('Ali', 5, 2);
console.log(s);
s.add();
s.get();
s.update();
s.delete();