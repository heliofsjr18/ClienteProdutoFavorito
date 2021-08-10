import express from 'express';
import router from './router';

export default class Server {

    public app: express.Application;
    public serviceName: string;

    constructor(environment: string = 'dev') {
        this.serviceName = `Magalu-${environment}`;
        this.app = express();
        this.configService();
    }

    private configService() {
        this.app.use(express.json());
        this.app.use('/', router);
        this.app.use(this.responseHandler);
    }

    private responseHandler(serverResponse, req, res, next): void {
        if(serverResponse.statusCode) {
            return res.status(serverResponse.statusCode).send(serverResponse.body);
        }
    }


}