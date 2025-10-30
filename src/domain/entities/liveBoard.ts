import { DailyTasks } from "./dailyTasks.ts";
import { Group } from "./group.ts";

export interface LiveBoardProps {
    id: string,
    group: Group,
    dailyTasks: DailyTasks[]
}

export class LiveBoard {
    constructor(private liveBoardProps: LiveBoardProps){}

    get id(): string {
        return this.liveBoardProps.id
    }

    get group(): Group {
        return this.liveBoardProps.group
    }

    get dailyTasks(): DailyTasks[] {
        return this.dailyTasks
    }
}