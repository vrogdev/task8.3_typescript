import {ILocation} from "./ILocation";
import {Employee} from "../EuropeCompany/Employee";

class CompanyLocationLocalStorage<T extends Employee> implements ILocation<Employee> {
    private employeesMap: Map<number, T>;
    private currentIndex: number;

    constructor() {
        this.employeesMap = new Map<number, T>();
        this.currentIndex = 0;
    }

    addPerson(employee: T): void {
        this.employeesMap.set(this.currentIndex, employee);
        this.currentIndex++;
    }

    getPerson(index: number): T | undefined {
        return this.employeesMap.get(index);
    }

    getCount(): number {
        return this.employeesMap.size;
    }
}

export {CompanyLocationLocalStorage};