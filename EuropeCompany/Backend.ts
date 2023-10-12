import {Employee} from "./Employee";

class Backend extends Employee {
    constructor(name: string, currentProject: string) {
        super(name, currentProject);
    }
}

export { Backend };