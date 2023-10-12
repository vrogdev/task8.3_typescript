import {ILocation} from "./ILocation";
import {Employee} from "../EuropeCompany/Employee";

class CompanyLocationArray<T extends Employee> implements ILocation<Employee> {
    private people: T[] = [];

    addPerson(person: T): void {
        this.people.push(person);
    }

    getPerson(index: number): T {
        return this.people[index];
    }

    getCount(): number {
        return this.people.length;
    }
}

export {CompanyLocationArray};