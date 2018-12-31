"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.connected = false;
        console.log('Class initialized');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: '123456',
            database: 'node_db'
        });
        this.connectDB();
    }
    // Verificates if already exists an instance and returns it. 
    // If not, it creates a new one.
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // Now we will create a method to handle posible connection errors
    connectDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.connected = true;
            console.log('Database online');
        });
    }
}
exports.default = MySQL;
