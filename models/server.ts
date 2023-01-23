import express, { Application } from 'express';
import userRoutes from '../routes/userRoute';
import cors from 'cors';
import db from '../db/connection';


 class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        user: '/api/users'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        
        //Config cors
        this.app.use(cors());
        //Lectura del body
        this.app.use(express.json())
        //Directorio publico
        this.app.use(express.static('public'))

    }

    async dbConnection() {

       try {

        await db.authenticate();

        console.log("the database is online!")
        
       } catch (error: any) {

         throw new Error(error);
         
       }

    }

    routes() {

        this.app.use(this.apiPaths.user, userRoutes)
        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log( 'Server Start in port: ' + this.port + ".");
        })
    }

}

export default Server;