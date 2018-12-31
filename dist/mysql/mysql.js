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
    // For the querys
    static executeQuery(query, callback) {
        // I cant use this.cnn because this an static method.
        // But we can use it inside an instance
        this.instance.cnn.query(query, (err, results, fields) => {
            if (err) {
                console.log('Query error');
                console.log(err);
                return callback(err);
            }
            if (results.length === 0) {
                callback('The requested register does not exist');
            }
            else {
                // If there was no error we return the callback with the results
                callback(null, results);
            }
        });
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
