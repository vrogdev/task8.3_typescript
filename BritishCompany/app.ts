import {Company} from "./Company";
import {CompanyLocationArray} from "./CompanyLocationArray";
import {CompanyLocationLocalStorage} from "./CompanyLocationLocalStorage";
import {Employee} from "../EuropeCompany/Employee";

const britishCompanyArray = new Company(new CompanyLocationArray<Employee>());
britishCompanyArray.addEmployee(new Employee("Employee1", "ProjectA"));
britishCompanyArray.addEmployee(new Employee("Employee2", "ProjectB"));

const britishCompanyLocalStorage = new Company(
    new CompanyLocationLocalStorage<Employee>()
);
britishCompanyLocalStorage.addEmployee(new Employee("Employee3", "ProjectC"));
britishCompanyLocalStorage.addEmployee(new Employee("Employee4", "ProjectD"));

console.log("Project List (Array):", britishCompanyArray.getProjectList());
console.log("Name List (Array):", britishCompanyArray.getNameList());

console.log("Project List (LocalStorage):", britishCompanyLocalStorage.getProjectList());
console.log("Name List (LocalStorage):", britishCompanyLocalStorage.getNameList());
