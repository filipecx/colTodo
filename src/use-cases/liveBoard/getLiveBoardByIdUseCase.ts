import { LiveBoard } from "../../domain/entities/liveBoard.ts";
import { InvalidValueError } from "../../domain/Errors/InvalidValueError.ts";
import { LiveBoardRepository } from "../../domain/interfaces/liveBoardRepository.ts";

export class GetLiveBoardByIdUseCase {
    constructor(private repository: LiveBoardRepository){}

    async execute(id: string): Promise<LiveBoard> {
        if (id == '') {
            throw new InvalidValueError('Nenhum id fornecido para liveboard')
        }
        return this.repository.getById(id)
    }
}