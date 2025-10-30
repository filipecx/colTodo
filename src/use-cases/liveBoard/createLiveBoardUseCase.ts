import { LiveBoard } from "../../domain/entities/liveBoard.ts";
import { MissingEntityError } from "../../domain/Errors/MissingEntityError.ts";
import { LiveBoardRepository } from "../../domain/interfaces/liveBoardRepository.ts";

export class CreateLiveBoardUseCase {
    constructor(private repository: LiveBoardRepository){}

    async execute(liveBoard: LiveBoard): Promise<LiveBoard> {
        if (!liveBoard) {
            throw new MissingEntityError('Nenhum liveboard fornecido')
        }
        return this.repository.create(liveBoard)
    }
}