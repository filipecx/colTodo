import { Task } from "../../domain/entities/task.ts";
import { InvalidValueError } from "../../domain/Errors/InvalidValueError.ts";
import { TaskRepository } from "../../domain/interfaces/taskRepository.ts";

export class GetTaskByIdUseCase {
    constructor(private repository: TaskRepository){}

    async execute(id: string): Promise<Task>{
        if (id == '') {
            throw new InvalidValueError("Nenhum ID fornecido para encontrar tarefa")
        }
        return this.repository.getById(id);
    }
}