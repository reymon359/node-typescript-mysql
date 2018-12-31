import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';


const server = Server.init(3000);
server.app.use(router);

// thanks to the singleton patron we defined in mysql.ts we 
// dont need to declare it because everytime we make a query 
// we will use the existant instance or create a new one.
// const mysql = new MySQL();
// MySQL.instance;


server.start(()=>{
    console.log('Server running on port 3000');
});