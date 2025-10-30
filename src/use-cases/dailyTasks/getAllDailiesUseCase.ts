import { DailyTasks } from "../../domain/entities/dailyTasks.ts";
import { DailyTasksRepository } from "../../domain/interfaces/dailyTasksRepository.ts";

export class GetAllDailiesUseCase {
    constructor(private repository: DailyTasksRepository){}

    async execute(): Promise<DailyTasks[]> {
        return await this.repository.getAll()
    }
}