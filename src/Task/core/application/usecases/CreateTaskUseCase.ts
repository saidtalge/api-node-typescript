import { Task } from "../../domain/entities/Task";
import { TaskRepository } from "../repositories/TaskRepository";

export class CreateTaskUseCase {
    private taskRepository: TaskRepository;

    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    public async execute(titulo: string, descricao: string): Promise<Task> {
        const task = await this.taskRepository.createTask(titulo, descricao);
        return task;
    }
}