import {Employee} from "./Employee";

class Company {
    private employees: Employee[] = [];

    add(employee: Employee): void {
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