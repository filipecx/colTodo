import { DailyTasks } from "../../domain/entities/dailyTasks.ts";
import { InvalidValueError } from "../../domain/Errors/InvalidValueError.ts";
import { MissingEntityError } from "../../domain/Errors/MissingEntityError.ts";
import { DailyTasksRepository } from "../../domain/interfaces/dailyTasksRepository.ts";

export class UpdateDailyUseCase {
    constructor(private repository: DailyTasksRepository){}

    async execute(daily: DailyTasks, id: string): Promise<DailyTasks> {
        if (!daily) {
            throw new MissingEntityError('Nenhuma daily fornecida')
        }
        if (id == '') {
            throw new InvalidValueError('Nenhum id fornecido')
        }
        return await this.repository.update(daily, id)
    }
}