import { TaskRepository } from "../repositories/TaskRepository";

export class ListTaskUseCase {
    private taskRepository: TaskRepository;
    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute() {
        return await this.taskRepository.listTasks();
    }
}