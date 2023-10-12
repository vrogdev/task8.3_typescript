import {IEmployee} from "./IEmployee";

class Company {
    private employees: IEmployee[] = [];

    add(employee: IEmployee): void {
        this.employees.push(employee);
    }

    getProjectList(): string[] {
        return this.employees.map((employee) => employee.getCurrentProject());
    }

    getNameList(): string[] {
        return this.employees.map((employee) => employee.getName());
    }
}

export {Company}