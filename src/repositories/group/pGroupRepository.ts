import { PrismaClient } from "@prisma/client";
import { Group } from "../../domain/entities/group.ts";
import { GroupRepository } from "../../domain/interfaces/groupRepository.ts";
import { GroupMapper } from "../mappers/groupMapper.ts";

export class PgrouprRepository implements GroupRepository {
    constructor(private prisma: PrismaClient){}

    async create(group: Group): Promise<Group> {
        const persistedGroup = await this.prisma.users.create({
            data: {
                name: group.name,
                users: group.users
            }
        })

        return GroupMapper.toDomain(persistedGroup)
    }
    async getAll(): Promise<Group[]> {
        return await this.prisma.groups.findAll()
        
    }
    async getById(id: string): Promise<Group> {
        const persistedGroup = await this.prisma.groups.findUnique({
            where: {
                id: id
            }
        })
        return GroupMapper.toDomain(persistedGroup)
    }
    async update(group: Group, id: string): Promise<Group> {
        const updatedGroup = await this.prisma.groups.update({
            where: {
                id: id
            }, data: {group}
        })
        return updatedGroup
    }
    async delete(id: string): Promise<boolean> {
        const success = await this.prisma.groups.deleteMany({
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