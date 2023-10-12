"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyLocationArray = void 0;
class CompanyLocationArray {
    constructor() {
        this.people = [];
    }
    addPerson(person) {
        this.people.push(person);
    }
    getPerson(index) {
        return this.people[index];
    }
    getCount() {
        return this.people.length;
    }
}
exports.CompanyLocationArray = CompanyLocationArray;
