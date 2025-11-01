import { PrismaClient } from "@prisma/client";
import { DailyTasks } from "../../domain/entities/dailyTasks.ts";
import { DailyTasksRepository } from "../../domain/interfaces/dailyTasksRepository.ts";
import { DailyTasksMapper } from "../mappers/dailyTasksMapper.ts";

export class PdailyTasksRepository implements DailyTasksRepository {
    constructor(private prisma: PrismaClient) { }


    async create(dailyTasks: DailyTasks): Promise<DailyTasks> {
        const persistedDaily = await this.prisma.dailyTasks.create({
            data: {
                day: dailyTasks.day,
                tasks: {
                    connect: dailyTasks.tasks.map((task) => ({ id: task.id }))
                }
            },
            include: {
                tasks: {
                    include: {
                        user: true
                    }
                }
            }
        })
        return DailyTasksMapper.toDomain(persistedDaily)
    }
    async getAll(): Promise<DailyTasks[]> {
        return DailyTasksMapper.toDomainList(await this.prisma.dailyTasks.findMany({
            include: {
                tasks: {
                    include: {
                        user: true,
                    },
                },
            },
        }))
    }
    async getById(id: string): Promise<DailyTasks> {
        const persistedDaily = await this.prisma.dailyTasks.findUnique({
            where: { id },
            include: {
                tasks: { include: { user: true } },
            },
        })

        if (!persistedDaily) {
            throw new Error(`DailyTasks with id ${id} not found`)
        }

        return DailyTasksMapper.toDomain(persistedDaily)

    }
    async update(dailyTasks: DailyTasks, id: string): Promise<DailyTasks> {
        const updatedDaily = await this.prisma.dailyTasks.update({
            where: { id },
            data: {
                day: dailyTasks.day,
                tasks: {
                    set: dailyTasks.tasks.map(task => ({ id: task.id }))
                }
            },
            include: {
                tasks: {
                    include: {
                        user: true
                    }
                }
            }
        })

        return DailyTasksMapper.toDomain(updatedDaily)

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