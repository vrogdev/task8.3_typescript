import {Employee} from "../EuropeCompany/Employee";

interface ILocation<T extends Employee> {
    addPerson(person: T): void;
    getPerson(index: number): T | undefined;
    getCount(): number;
}

export { ILocation };