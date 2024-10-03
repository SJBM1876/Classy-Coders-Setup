class Employee {
    static #allEmployees = []; 

    #salary;  
    #isHired; 

    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = true; 

        Employee.#allEmployees.push(this); // Add employee to the static list
    }

    

    getSalary() {
        return this.#salary;
    }

    setSalary(amount) {
        this.#salary = amount;
    }

    getStatus() {
        return this.#isHired;
    }

    setStatus(command) {
        if (command === 'hire') {
            this.#isHired = true;
        } else if (command === 'fire') {
            this.#isHired = false;
        }
    }

    // Static method to return all employees
    static getEmployees() {
        return this.#allEmployees;
    }

    // Static method to calculate total payroll (sum of all salaries)
    static getTotalPayroll() {
        let total = 0;
        for (let i = 0; i < this.#allEmployees.length; i ++) {
            total += this.#allEmployees[i].#salary;
        }
        return total;
    }
}



module.exports = {
    Employee,
}
