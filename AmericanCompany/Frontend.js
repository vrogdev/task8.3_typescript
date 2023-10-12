"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Frontend = void 0;
class Frontend {
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
exports.Frontend = Frontend;
