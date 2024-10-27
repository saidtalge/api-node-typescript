import { Task } from "../../domain/entities/Task";

export interface TaskRepository {
    createTask(titulo: string, descricao: string): Promise<Task>;
    listTasks(): Promise<Task[]>;
}