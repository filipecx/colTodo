import { LiveBoard } from "../../domain/entities/liveBoard.ts";
import { LiveBoardRepository } from "../../domain/interfaces/liveBoardRepository.ts";

export class GetAllLiveBoardsUseCase {
    constructor(private repository: LiveBoardRepository){}

    async execute(): Promise<LiveBoard[]> {
        return this.repository.getAll()
    }
}