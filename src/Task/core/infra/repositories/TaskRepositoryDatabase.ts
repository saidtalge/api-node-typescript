import { TaskRepository } from "../../application/repositories/TaskRepository";
import { Task } from "../../domain/entities/Task";
// import DatabaseConnectionInterface from "../database/DatabaseConnection";

export class TaskRepositoryDatabase implements TaskRepository {
    private tasks: Task[] = []

    async createTask(titulo: string, descricao: string): Promise<Task> {
        const task_criadas = new Task('1', titulo, descricao, 'pendente');
        this.tasks.push(task_criadas);
        return task_criadas;
    }

    async listTasks(): Promise<Task[]|any> {
        return this.tasks;
    }
}
