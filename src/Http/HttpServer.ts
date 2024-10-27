import express from "express";
import Fastify from 'fastify'
import { Router as RouterExpress } from "express";

export default interface HttpServer {
    listen(port: number, callback: () => void): void;
}

export class ExpressAdapter implements HttpServer {
    server: any;

    constructor(rota: RouterExpress) {
        this.server = express();
        this.server.use(express.json());
        this.server.use(rota);
    }

    public listen(port: number, callback: () => void): void {
        this.server.listen(port, callback);
    }
}

export class FastifyAdapter implements HttpServer {
    server: any;

    constructor(rota: any) {
        this.server = Fastify({ logger: true });      
        this.server.register(rota);
    }

    public listen(port: number, callback: () => void): void {
        this.server.listen({ port: port }, callback);
    }
}
