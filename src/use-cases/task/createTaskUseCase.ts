import { Task } from "../../domain/entities/task.ts";
import { TaskRepository } from "../../domain/interfaces/taskRepository.ts";

export class CreateTaskUseCase {
    constructor(private repository: TaskRepository){}
    async execute(task: Task): Promise<Task> {
        return this.repository.create(task);
    }
}