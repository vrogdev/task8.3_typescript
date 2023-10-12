"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("./Company");
const CompanyLocationArray_1 = require("./CompanyLocationArray");
const CompanyLocationLocalStorage_1 = require("./CompanyLocationLocalStorage");
const Employee_1 = require("../EuropeCompany/Employee");
const britishCompanyArray = new Company_1.Company(new CompanyLocationArray_1.CompanyLocationArray());
britishCompanyArray.addEmployee(new Employee_1.Employee("Employee1", "ProjectA"));
britishCompanyArray.addEmployee(new Employee_1.Employee("Employee2", "ProjectB"));
const britishCompanyLocalStorage = new Company_1.Company(new CompanyLocationLocalStorage_1.CompanyLocationLocalStorage());
britishCompanyLocalStorage.addEmployee(new Employee_1.Employee("Employee3", "ProjectC"));
britishCompanyLocalStorage.addEmployee(new Employee_1.Employee("Employee4", "ProjectD"));
console.log("Project List (Array):", britishCompanyArray.getProjectList());
console.log("Name List (Array):", britishCompanyArray.getNameList());
console.log("Project List (LocalStorage):", britishCompanyLocalStorage.getProjectList());
console.log("Name List (LocalStorage):", britishCompanyLocalStorage.getNameList());