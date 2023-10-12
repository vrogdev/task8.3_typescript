"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("./Company");
const Frontend_1 = require("./Frontend");
const Backend_1 = require("./Backend");
const americanCompany = new Company_1.Company();
const frontendEmployee1 = new Frontend_1.Frontend("Frontend1", "ProjectA");
const frontendEmployee2 = new Frontend_1.Frontend("Frontend2", "ProjectB");
const backendEmployee1 = new Backend_1.Backend("Backend1", "ProjectA");
const backendEmployee2 = new Backend_1.Backend("Backend2", "ProjectC");
americanCompany.add(frontendEmployee1);
americanCompany.add(frontendEmployee2);
americanCompany.add(backendEmployee1);
americanCompany.add(backendEmployee2);
console.log("Project List:", americanCompany.getProjectList());
console.log("Name List:", americanCompany.getNameList());