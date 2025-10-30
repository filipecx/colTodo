import { Task } from "../../domain/entities/task.ts";
import { InvalidValueError } from "../../domain/Errors/InvalidValueError.ts";
import { MissingEntityError } from "../../domain/Errors/MissingEntityError.ts";
import { TaskRepository } from "../../domain/interfaces/taskRepository.ts";

export class UpdateTaskUseCase {
    constructor(private repository: TaskRepository){}

    async execute(task: Task, id: string): Promise<Task> {
        if (!task) {
            throw new MissingEntityError('Nenhuma tarefa fornecida')
        }
        if (id == '') {
            throw new InvalidValueError('Nenhum id de tarefa fornecido')
        }
        return this.repository.update(task, id)
    }
}