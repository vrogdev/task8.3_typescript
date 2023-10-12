import { Employee } from './Employee'

class Frontend extends Employee {
    constructor(name: string, currentProject: string) {
        super(name, currentProject);
    }
}

export { Frontend };