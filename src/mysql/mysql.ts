import mysql = require('mysql');

export default class MySQL {
    // We will implement the Singleton Patron
    // So i will manage a private instance of this class in the class itself
    private static _instance: MySQL;

    cnn: mysql.Connection;
    connected: boolean = false;

    constructor() {
        console.log('Class initialized');

        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: '123456',
            database: 'node_db'
        });

        this.connectDB();
    }
    // Now we will create a method to handle posible connection errors
    private connectDB() {
        this.cnn.connect((err: mysql.MysqlError) => {

            if (err) {
                console.log(err.message);
                return;
            }

            this.connected = true;
            console.log('Database online');
        });
    }

}