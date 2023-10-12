"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(location) {
        this.location = location;
    }
    addEmployee(employee) {
        this.location.addPerson(employee);
    }
    getProjectList() {
        let employeesSize = this.location.getCount();
        let projectList = [];
        for (let i = 0; i < employeesSize; i++) {
            let employee = this.location.getPerson(i);
            if (employee)
                projectList.push(employee.getCurrentProject());
        }
        return projectList;
    }
    getNameList() {
        let employeesSize = this.location.getCount();
        let nameList = [];
        for (let i = 0; i < employeesSize; i++) {
            let employee = this.location.getPerson(i);
            if (employee)
                nameList.push(employee.getName());
        }
        return nameList;
    }
}
exports.Company = Company;
