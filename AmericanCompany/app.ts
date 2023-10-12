import { Company } from "./Company";
import { Frontend } from "./Frontend";
import { Backend } from "./Backend";

const americanCompany = new Company();

const frontendEmployee1 = new Frontend("Frontend1", "ProjectA");
const frontendEmployee2 = new Frontend("Frontend2", "ProjectB");
const backendEmployee1 = new Backend("Backend1", "ProjectA");
const backendEmployee2 = new Backend("Backend2", "ProjectC");

americanCompany.add(frontendEmployee1);
americanCompany.add(frontendEmployee2);
americanCompany.add(backendEmployee1);
americanCompany.add(backendEmployee2);

console.log("Project List:", americanCompany.getProjectList());
console.log("Name List:", americanCompany.getNameList());