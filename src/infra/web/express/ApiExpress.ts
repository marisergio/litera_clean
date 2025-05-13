import express, { Express, Router } from "express";

export class ApiExpress {
    private app: Express;

    constructor(routes: Router) {
        this.app = express();
        this.app.use(express.json());
        this.app.use(routes)
    }

    public start(port: number) {
        this.app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
}