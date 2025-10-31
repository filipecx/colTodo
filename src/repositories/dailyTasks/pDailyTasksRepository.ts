import { PrismaClient } from "@prisma/client";
import { DailyTasks } from "../../domain/entities/dailyTasks.ts";
import { DailyTasksRepository } from "../../domain/interfaces/dailyTasksRepository.ts";
import { DailyTasksMapper } from "../mappers/dailyTasksMapper.ts";

export class PdailyTasksRepository implements DailyTasksRepository {
    constructor(private prisma: PrismaClient){}


    async create(dailyTasks: DailyTasks): Promise<DailyTasks> {
        const persistedDaily = await this.prisma.dailyTasks.create({
            data: {
                day: dailyTasks.day,
                tasks: dailyTasks.tasks
            }
        })
        return DailyTasksMapper.toDomain(persistedDaily)
    }
    async getAll(): Promise<DailyTasks[]> {
        return DailyTasksMapper.toDomainList(await this.prisma.dailyTasks.findMany())
    }
    async getById(id: string): Promise<DailyTasks> {
        return DailyTasksMapper.toDomain(await this.prisma.dailyTasks.findUnique({where: {id: id}}))
    }
    async update(dailyTasks: DailyTasks, id: string): Promise<DailyTasks> {
        return DailyTasksMapper.toDomain(await this.prisma.dailyTasks.update({
            where: {id: id}, 
            data: {
                day: dailyTasks.day,
                tasks: dailyTasks.tasks
            }
    }))
    }
    async delete(id: string): Promise<boolean> {
        const success = await this.prisma.dailyTasks.deleteMany({
            where: {
                id: id
            }
        })
        if (success.count > 0) {
            return true
        }

        return false
    }

}