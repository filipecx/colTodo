import { PrismaClient } from "@prisma/client";
import { LiveBoardRepository } from "../../domain/interfaces/liveBoardRepository.ts";
import { LiveBoard } from "../../domain/entities/liveBoard.ts";
import { LiveBoardMapper } from "../mappers/liveBoardMapper.ts";

export class PliveBoardRepository implements LiveBoardRepository {
    constructor(private prisma: PrismaClient){}

    async create(liveBoard: LiveBoard): Promise<LiveBoard> {
        const persistedBoard = await this.prisma.liveBoards.create({
            data: {
                group: liveBoard.group,
                dailyTasks: liveBoard.dailyTasks
            }
        })

        return LiveBoardMapper.toDomain(persistedBoard)
    }
    async getAll(): Promise<LiveBoard[]> {
        return await this.prisma.liveBoards.findAll()
        
    }
    async getById(id: string): Promise<LiveBoard> {
        const persistedGroup = await this.prisma.liveBoards.findUnique({
            where: {
                id: id
            }
        })
        return LiveBoardMapper.toDomain(persistedGroup)
    }
    async update(liveBoard: LiveBoard, id: string): Promise<LiveBoard> {
        const updatedBoard = await this.prisma.liveBoards.update({
            where: {
                id: id
            }, data: {liveBoard}
        })
        return updatedBoard
    }
    async delete(id: string): Promise<boolean> {
        const success = await this.prisma.liveBoards.deleteMany({
            where: {
                id: id
            }
        })
        if (success > 0) {
            return true
        }

        return false
    }
}