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

    // Verificates if already exists an instance and returns it. 
    // If not, it creates a new one.
    public static get instance(){
        return this._instance  ||(this._instance = new this())   ;
    }

    // For the querys
    static executeQuery(query:string, callback:Function){
        // I cant use this.cnn because this an static method.
        // But we can use it inside an instance
        this.instance.cnn.query(query, (err,results:Object[], fields)=>{
       
            if (err){
                console.log('Query error');
                console.log(err);
                return callback(err);
            }

            if(results.length===0){
                callback('The requested register does not exist');
            }else{
                // If there was no error we return the callback with the results
                callback(null, results);    
            }
        });
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