import { InvalidValueError } from "../../domain/Errors/InvalidValueError.ts";
import { LiveBoardRepository } from "../../domain/interfaces/liveBoardRepository.ts";
import { GetLiveBoardByIdUseCase } from "./getLiveBoardByIdUseCase.ts";

export class DeleteLiveBoardUseCase {
    constructor(
        private repository: LiveBoardRepository,
        private getById: GetLiveBoardByIdUseCase
    ) {}

    async execute(id: string): Promise<boolean> {
        if (id == '') {
            throw new InvalidValueError('Nenhum id fornecido para deletar board')
        }
        if(!this.getById.execute(id)) {
            return false
        }
        await this.repository.delete(id)
            return true
        
    }
}