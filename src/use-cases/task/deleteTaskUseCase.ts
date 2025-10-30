import { InvalidValueError } from "../../domain/Errors/InvalidValueError.ts";
import { TaskRepository } from "../../domain/interfaces/taskRepository.ts";

export class DeleteTaskUseCase {
    constructor(private repository: TaskRepository){}

    async execute(id: string): Promise<boolean> {
        if (id == '') {
            throw new InvalidValueError('Nenhum id fornecido para remover tarefa')
        }
        return this.repository.delete(id);
    }
}