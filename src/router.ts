import { Request, Response, Router } from "express";
import { FastifyInstance, FastifyPluginCallback } from "fastify";
import { TarefaController } from "./Task/api/TaskController";
import { CreateTaskUseCase } from "./Task/core/application/usecases/CreateTaskUseCase";
import { ListTaskUseCase } from "./Task/core/application/usecases/ListTaskUseCase";
import { TaskRepositoryDatabase } from "./Task/core/infra/repositories/TaskRepositoryDatabase";

const taskRepository = new TaskRepositoryDatabase();
const createTaskUseCase = new CreateTaskUseCase(taskRepository);
const listTaskUseCase = new ListTaskUseCase(taskRepository);
const tarefaController = new TarefaController(createTaskUseCase, listTaskUseCase);

export interface HttpRouter {
    routes(): Router | FastifyPluginCallback;
}

export class routerExpress implements HttpRouter {
    private router: Router;

    constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    private setupRoutes():void {
        this.router.get('/tarefas', async (req: Request, res: Response): Promise<void> => {
            await res.json(await tarefaController.listTarefas(req, res));
        });
        this.router.post('/tarefas', async (req: Request, res: Response): Promise<void> => {
            await res.json(await tarefaController.createTarefa(req, res));
        });
    }

    routes(): Router {
        return this.router;
    }
}

export class routerFastify implements HttpRouter {
    private router: FastifyPluginCallback;
    
    constructor() {
        this.router = (fastify, opts, done) => {
            this.setupRoutes(fastify);
            done();
        };
    }

    private setupRoutes(fastify: FastifyInstance):void {
        fastify.get('/tarefas', async (req: any, res: any): Promise<void> => {
            res.send(await tarefaController.listTarefas(req, res));
        });
        fastify.post('/tarefas', async (req: any, res: any): Promise<void> => {
            res.send(await tarefaController.createTarefa(req, res));
        });
    }

    public routes(): FastifyPluginCallback {
        return this.router;
    }
}
