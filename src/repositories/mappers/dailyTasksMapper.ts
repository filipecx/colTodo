import { DailyTasks, Day } from "../../domain/entities/dailyTasks.ts";

export class DailyTasksMapper {
    static toDomain(dailyTasks: DailyTasks): DailyTasks {
        return new DailyTasks({
            id: dailyTasks.id,
            day: Day[dailyTasks.day as keyof typeof Day],
            tasks: dailyTasks.tasks
        })
    }

    static toDomainList(dailyTasks: DailyTasks[]): DailyTasks[] {
        return dailyTasks.map((daily) => new DailyTasks({
            id: daily.id,
            day: Day[daily.day as keyof typeof Day],
            tasks: daily.tasks
        }))
    }
}