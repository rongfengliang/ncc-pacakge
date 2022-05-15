"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demo = void 0;
class Demo {
    constructor(name) {
        this.name = name;
        this.age = 33;
        this.name = name;
    }
    login(t) {
        return "dalong";
    }
}
exports.Demo = Demo;
exports.default = Demo;
let appdemo;
class BaseLogin {
    init(t) { }
}
let mytype = {
    name: "dd",
    age: 33
};
class db {
    constructor(mongoURI) {
        this.mongouri = mongoURI;
    }
    createCollection(name, ...options) {
    }
}
