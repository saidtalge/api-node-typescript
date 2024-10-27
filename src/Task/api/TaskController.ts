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
    async createTarefa(req: Request, res: Response) {
        // const tarefa = await this.createTaskUseCase.execute(titulo, descricao); // Temporariamente comentado
        return { message: "Executado com sucesso" };
    }

    async listTarefas(req: Request, res: Response) {
        const tarefas = await this.listTaskUseCase.execute();
        return tarefas;
    }
    
}