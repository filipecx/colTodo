import { Task } from "../entities/task.ts"

export interface TaskRepository {
    create(task: Task): Promise<Task>
    getAll(): Promise<Task[]>
    getByUserId(id: string): Promise<Task[]>
    getById(id: string): Promise<Task[]>
    update(task: Task, id: string): Promise<Task>
    delete(id: string): Promise<boolean>
}