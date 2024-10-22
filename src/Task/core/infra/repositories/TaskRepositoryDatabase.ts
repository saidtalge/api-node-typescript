import { TaskRepository } from "../../application/repositories/TaskRepository";
import { Task } from "../../domain/entities/Task";
import DatabaseConnectionInterface from "../database/DatabaseConnection";

export class TaskRepositoryDatabase implements TaskRepository {

    // constructor(readonly connection: DatabaseConnectionInterface) {
    //     this.connection = connection;
    // }
    constructor(){
        
    }
    async createTask(titulo: string, descricao: string): Promise<Task> {
        return new Task('1', titulo, descricao, 'pendente');
    }

    async listTasks(): Promise<Task[]> {
        return [new Task('1', 'titulo', 'descricao', 'pendente')];
    }

    async updateTask(id: string, titulo: string, descricao: string, status: string): Promise<Task> {
        return new Task(id, titulo, descricao, status);
    }

    async deleteTask(id: string): Promise<Task> {
        return new Task(id, 'titulo', 'descricao', 'pendente');
    }
}
