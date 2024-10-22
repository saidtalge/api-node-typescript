import { Task } from "../../domain/entities/Task";

export interface TaskRepository {
    createTask(titulo: string, descricao: string): Promise<Task>;
    listTasks(): Promise<Task[]>;
    updateTask(id: string, titulo: string, descricao: string, status: string): Promise<Task>;
    deleteTask(id: string): Promise<Task>;
}