import { Request, Response } from 'express';
import { CreateTaskUseCase } from '../core/application/usecases/CreateTaskUseCase';
import { ListTaskUseCase } from '../core/application/usecases/ListTaskUseCase';

export class TarefaController {
    private createTaskUseCase: CreateTaskUseCase;
    private listTaskUseCase: ListTaskUseCase;
    constructor(
        createTaskUseCase: CreateTaskUseCase,
        listTaskUseCase: ListTaskUseCase
    ) {
        this.createTaskUseCase = createTaskUseCase;
        this.listTaskUseCase = listTaskUseCase;
    }
    // async createTarefa(req: Request, res: Response) {
    //     const { titulo, descricao } = req.body;
    //     const tarefa = await this.tarefaService.createTarefa(titulo, descricao);
    //     return res.json(tarefa);
    // }
    async listTarefas(req: Request, res: Response) {
        const tarefas = await this.listTaskUseCase.execute();
        return tarefas;
    }
    // async updateTarefa(req: Request, res: Response) {
    //     const { id } = req.params;
    //     const { titulo, descricao, status } = req.body;
    //     const tarefa = await this.tarefaService.updateTarefa(id, titulo, descricao, status);
    //     return res.json(tarefa);
    // }
    // async deleteTarefa(req: Request, res: Response) {
    //     const { id } = req.params;
    //     const tarefa = await this.tarefaService.deleteTarefa(id);
    //     return res.json(tarefa);
    // }
}