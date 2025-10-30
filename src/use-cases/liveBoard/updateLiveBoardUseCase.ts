import { LiveBoard } from "../../domain/entities/liveBoard.ts";
import { InvalidValueError } from "../../domain/Errors/InvalidValueError.ts";
import { MissingEntityError } from "../../domain/Errors/MissingEntityError.ts";
import { LiveBoardRepository } from "../../domain/interfaces/liveBoardRepository.ts";

export class UpdateLiveBoardUseCase {
    constructor(private repostiroy: LiveBoardRepository){}

    async execute(liveBoard: LiveBoard, id: string): Promise<LiveBoard> {
        if (!liveBoard) {
            throw new MissingEntityError('Nenhum liveboard fornecido')
        }
        if (id == '') {
            throw new InvalidValueError('Nenhum id fornecido para atualizar liveboard')
        }
        return this.repostiroy.update(liveBoard, id)
    }
}