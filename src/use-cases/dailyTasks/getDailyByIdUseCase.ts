import { DailyTasks } from "../../domain/entities/dailyTasks.ts";
import { InvalidValueError } from "../../domain/Errors/InvalidValueError.ts";
import { DailyTasksRepository } from "../../domain/interfaces/dailyTasksRepository.ts";

export class GetDailyByIdUseCase {
    constructor(private repository: DailyTasksRepository){}

    async execute(id: string): Promise<DailyTasks> {
        if (id == '') {
            throw new InvalidValueError('Nenhum id para daily fornecido')
        }
        return await this.repository.getById(id)
    }
}