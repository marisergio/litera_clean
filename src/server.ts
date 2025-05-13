import LivroRoutes from './infra/web/express/routes/LivroRoutes';
import { ApiExpress } from './infra/web/express/ApiExpress';

function main() {
    const app = new ApiExpress(LivroRoutes);
    app.start(3000);
}


main();
