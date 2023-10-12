"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyLocationLocalStorage = void 0;
class CompanyLocationLocalStorage {
    constructor() {
        this.employeesMap = new Map();
        this.currentIndex = 0;
    }
    addPerson(employee) {
        this.employeesMap.set(this.currentIndex, employee);
        this.currentIndex++;
    }
    getPerson(index) {
        return this.employeesMap.get(index);
    }
    getCount() {
        return this.employeesMap.size;
    }
}
exports.CompanyLocationLocalStorage = CompanyLocationLocalStorage;
