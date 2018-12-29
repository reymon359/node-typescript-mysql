"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// Export is to export the class to other files and 
// default is to say that this will be the class exported by default
class Server {
    constructor(port) {
        this.port = port;
        this.app = express();
    }
    // Static method that will be called and start the constructor
    static init(port) {
        return new Server(port);
    }
    start(callback) {
        this.app.listen(this.port, callback);
    }
}
exports.default = Server;
