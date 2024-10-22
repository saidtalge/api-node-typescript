import { Request, Response, Router } from "express";
import { FastifyInstance, FastifyPluginCallback } from "fastify";
import { TarefaController } from "./Task/api/TaskController";
import { CreateTaskUseCase } from "./Task/core/application/usecases/CreateTaskUseCase";
import { ListTaskUseCase } from "./Task/core/application/usecases/ListTaskUseCase";
import { TaskRepositoryDatabase } from "./Task/core/infra/repositories/TaskRepositoryDatabase";

const routerExpress = Router();
const taskRepository = new TaskRepositoryDatabase();
const createTaskUseCase = new CreateTaskUseCase(taskRepository);
const listTaskUseCase = new ListTaskUseCase(taskRepository);
const tarefaController = new TarefaController(createTaskUseCase, listTaskUseCase);

routerExpress.get('/tarefas', async (req: Request, res: Response): Promise<void> => {
    await res.json(await tarefaController.listTarefas(req, res));
});


export { routerExpress };

const routerFastify: FastifyPluginCallback = (fastify: FastifyInstance, opts, done) => {
    fastify.get('/tarefas', async (req: any, res: any): Promise<void> => {
        res.send(await tarefaController.listTarefas(req, res));
    });
    done();
}

export { routerFastify };