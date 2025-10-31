import { LiveBoard } from "../../domain/entities/liveBoard.ts";

export class LiveBoardMapper {
    static toDomain(liveBoard: LiveBoard): LiveBoard {
        return new LiveBoard({
            id: liveBoard.id,
            group: liveBoard.group,
            dailyTasks: liveBoard.dailyTasks
        })
    }

    static toDomainList(liveBoards: LiveBoard[]): LiveBoard[] {
        return liveBoards.map((live) => new LiveBoard({
            id: live.id,
            group: live.group,
            dailyTasks: live.dailyTasks
        }))
    }
}