"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Frontend = void 0;
const Employee_1 = require("./Employee");
class Frontend extends Employee_1.Employee {
    constructor(name, currentProject) {
        super(name, currentProject);
    }
}
exports.Frontend = Frontend;
