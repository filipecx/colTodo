import { DailyTasks } from "./dailyTasks.ts";
import { Group } from "./group.ts";

export interface LiveBoardProps {
    id: string,
    group_id: string,
    dailyTasks: string[]
}

export class LiveBoard {
    constructor(private liveBoardProps: LiveBoardProps){}

    get id(): string {
        return this.liveBoardProps.id
    }

    get group(): string {
        return this.liveBoardProps.group_id
    }

    get dailyTasks(): string[] {
        return this.dailyTasks
    }
}