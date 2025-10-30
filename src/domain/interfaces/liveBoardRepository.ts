import { LiveBoard } from "../entities/liveBoard.ts"

export interface LiveBoardRepository {
    create(liveBoard: LiveBoard): Promise<LiveBoard>
    getAll(): Promise<LiveBoard[]>
    getById(id: string): Promise<LiveBoard>
    update(liveBoard: LiveBoard, id: string): Promise<LiveBoard>
    delete(id: string): Promise<boolean>
}