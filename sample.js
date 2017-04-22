var Person = function(firstName, lastName){
  this.firstName = firstName;
    this.lastName = lastName;
};

//
Person.prototype.getName = function(){
  return this.firstName + this.lastName;};

var Employee = function(firstName, lastName, employeeId){
//inheriting Person class
    Person.call(this, firstName, lastName);
    this.employeeId = employeeId;
};

//Creating Employee Class by Utilizing Person class using Object.create
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;


/*var person1 = new Person('joe', 'balingit', 123);
console.log(person1)*/
var employee = new Employee('joe','balingit', 123);
console.log(employee);