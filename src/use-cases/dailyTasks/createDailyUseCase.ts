import { DailyTasks } from "../../domain/entities/dailyTasks.ts";
import { MissingEntityError } from "../../domain/Errors/MissingEntityError.ts";
import { DailyTasksRepository } from "../../domain/interfaces/dailyTasksRepository.ts";

export class CreateDailyUseCase {
    constructor(private repository: DailyTasksRepository) {}

    async execute(daily: DailyTasks): Promise<DailyTasks> {
        if (!daily) {
            throw new MissingEntityError('Nenhum dia fornecido')
        }
        return await this.repository.create(daily)
    }
}