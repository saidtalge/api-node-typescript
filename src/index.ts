import dotenv from "dotenv";
import { routerExpress, routerFastify } from "./router";
import { ExpressAdapter, FastifyAdapter} from "./Http/HttpServer";
import fastify from "fastify";

dotenv.config({ 
        path: '.env' 
});

(async () => {
    
    const router = new routerExpress();
    const server = new ExpressAdapter(router.routes());
    // const router = new routerFastify();
    // const server = new FastifyAdapter(router.routes());

    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
    server.listen(port, () => console.log(`Server is running on port ${port}`));

})();