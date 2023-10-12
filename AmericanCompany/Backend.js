"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backend = void 0;
class Backend {
    constructor(name, currentProject) {
        this.name = name;
        this.currentProject = currentProject;
    }
    getCurrentProject() {
        return this.currentProject;
    }
    getName() {
        return this.name;
    }
}
exports.Backend = Backend;
