const { Employee } = require('./Employee');

class Manager extends Employee {
    #employeesManaged; 

    constructor(name, position, salary, department) {
        super(name, position, salary); 
        this.department = department;
        this.#employeesManaged = [];
    }    

    getEmployeesManaged() {
        return this.#employeesManaged;
    }

    setEmployeesManaged(employee) {
        this.#employeesManaged.push(employee);
    }   
    
    getDepartment() {
        return this.department;
    }

    
    setDepartment(newDepartment) {
        this.department = newDepartment;
    }
}

module.exports = {
    Manager,
}