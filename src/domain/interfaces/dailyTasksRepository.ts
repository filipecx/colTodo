import { DailyTasks } from "../entities/dailyTasks.ts"

export interface DailyTasksRepository {
    create(dailyTasks: DailyTasks): Promise<DailyTasks>
    getAll(): Promise<DailyTasks[]>
    getById(id: string): Promise<DailyTasks>
    update(dailyTasks: DailyTasks, id: string): Promise<DailyTasks>
    delete(id: string): Promise<boolean>
}