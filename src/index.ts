import dotenv from "dotenv";
import { routerExpress, routerFastify } from "./router";
import { ExpressAdapter, FastifyAdapter} from "./Http/HttpServer";

dotenv.config({ 
        path: '.env' 
});

(async () => {

    // const server = new ExpressAdapter(routerExpress);
    const server = new FastifyAdapter(routerFastify);

    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
    server.listen(port, () => console.log(`Server is running on port ${port}`));

})();