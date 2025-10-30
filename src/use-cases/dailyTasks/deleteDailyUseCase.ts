import { InvalidValueError } from "../../domain/Errors/InvalidValueError.ts";
import { DailyTasksRepository } from "../../domain/interfaces/dailyTasksRepository.ts";
import { GetDailyByIdUseCase } from "./getDailyByIdUseCase.ts";

export class DeleteDailyUseCase {
    constructor(private repository: DailyTasksRepository,
       private useCase: GetDailyByIdUseCase
    ){}

    async execute(id: string): Promise<boolean> {
        if (id == ''){
            throw new InvalidValueError('Nenhum id fornecido')
        }
        if(this.useCase.execute(id)) {
            this.repository.delete(id)
            return true
        }
        return false
    }
}