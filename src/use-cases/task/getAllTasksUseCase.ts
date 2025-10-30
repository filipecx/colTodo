import { Task } from "../../domain/entities/task.ts";
import { TaskRepository } from "../../domain/interfaces/taskRepository.ts";

export class GetAllTasksUseCase {
    constructor(private repository: TaskRepository){}

    async execute(): Promise<Task[]>{
        return this.repository.getAll();
    }
}