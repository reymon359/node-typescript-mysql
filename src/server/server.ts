import express = require('express');


// Export is to export the class to other files and 
// default is to say that this will be the class exported by default
export default class Server{

    public app: express.Application;
    public port: number;

    constructor(port:number){
        this.port = port;
        this.app = express();
    }
    
    // Static method that will be called and start the constructor
    static init(port:number){
        return new Server(port);
    }

    start(callback:Function){
        this.app.listen(this.port, callback);
    }
}