import Employee from './Employee.js'
class Manager extends Employee {
    #employeesManaged
    constructor(name,position,salary,department){
        super (name,position,salary)
        this.department=department
        this.#employeesManaged=[]
    }


    
}

module.exports = {
    Manager,
}