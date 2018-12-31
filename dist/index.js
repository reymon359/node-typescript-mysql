"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const router_1 = __importDefault(require("./router/router"));
const server = server_1.default.init(3000);
server.app.use(router_1.default);
// thanks to the singleton patron we defined in mysql.ts we 
// dont need to declare it because everytime we make a query 
// we will use the existant instance or create a new one.
// const mysql = new MySQL();
// MySQL.instance;
server.start(() => {
    console.log('Server running on port 3000');
});
