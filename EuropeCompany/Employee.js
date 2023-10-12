"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, currentProject) {
        this.name = name;
        this.currentProject = currentProject;
    }
    getName() {
        return this.name;
    }
    getCurrentProject() {
        return this.currentProject;
    }
}
exports.Employee = Employee;
