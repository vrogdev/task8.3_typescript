import {ILocation} from "./ILocation";
import {Employee} from "../EuropeCompany/Employee";

class Company<T extends Employee> {
    private location: ILocation<T>;

    constructor(location: ILocation<T>) {
        this.location = location;
    }

    addEmployee(employee: T): void {
        this.location.addPerson(employee);
    }

    getProjectList(): string[] {
        let employeesSize = this.location.getCount();
        let projectList: string[] = [];

        for (let i = 0; i < employeesSize; i++) {
            let employee = this.location.getPerson(i);
            if (employee)
                projectList.push(employee.getCurrentProject());
        }

        return projectList;
    }

    getNameList(): string[] {
        let employeesSize = this.location.getCount();
        let nameList: string[] = [];

        for (let i = 0; i < employeesSize; i++) {
            let employee = this.location.getPerson(i);
            if (employee)
                nameList.push(employee.getName());
        }

        return nameList;
    }
}

export {Company};
