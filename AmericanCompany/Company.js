"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor() {
        this.employees = [];
    }
    add(employee) {
        this.employees.push(employee);
    }
    getProjectList() {
        return this.employees.map((employee) => employee.getCurrentProject());
    }
    getNameList() {
        return this.employees.map((employee) => employee.getName());
    }
}
exports.Company = Company;
