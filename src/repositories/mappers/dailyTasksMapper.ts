import { DailyTasks, Day } from "../../domain/entities/dailyTasks.ts";
import { Task } from "../../domain/entities/task.ts";
import { User } from "../../domain/entities/user.ts";

export type PrismaDaily = {
    id: string;
    day: string;
    tasks: {id: string, title: string, user: { id: string; username: string; password: string }, completed: boolean}[]
}

export class DailyTasksMapper {
    static toDomain(dailyTasks: PrismaDaily): DailyTasks {
        return new DailyTasks({
            id: dailyTasks.id,
            day: Day[dailyTasks.day as keyof typeof Day],
            tasks: dailyTasks.tasks.map((task) => new Task({
                id: task.id,
                title: task.title,
                user: new User({ id: task.user.id, username: task.user.username, password: task.user.password }),
                completed: task.completed
            }))
        })
    }

    static toDomainList(dailyTasks: PrismaDaily[]): DailyTasks[] {
        return dailyTasks.map((daily) => this.toDomain(daily))
    }
}