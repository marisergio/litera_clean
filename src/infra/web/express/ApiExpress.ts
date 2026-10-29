import express, { Express, Router } from "express";
import cors from 'cors';
import { ApiWeb } from "../ApiWeb";

export class ApiExpress implements ApiWeb<Router> {

    private readonly app: Express;
    
    constructor(routes: Router) {
        this.app = express();

        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(routes);

    }

    start(port: number): void {
        this.app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
}