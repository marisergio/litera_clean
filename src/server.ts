import router from './infra/web/express/routes/index';
import { ApiExpress } from './infra/web/express/ApiExpress';

function main() {
    const app = new ApiExpress(router);
    app.start(3000);
}


main();
