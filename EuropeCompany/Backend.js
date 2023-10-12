"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backend = void 0;
const Employee_1 = require("./Employee");
class Backend extends Employee_1.Employee {
    constructor(name, currentProject) {
        super(name, currentProject);
    }
}
exports.Backend = Backend;
