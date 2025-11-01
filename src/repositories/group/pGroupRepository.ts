import { PrismaClient } from "@prisma/client";
import { Group } from "../../domain/entities/group.ts";
import { GroupRepository } from "../../domain/interfaces/groupRepository.ts";
import { GroupMapper } from "../mappers/groupMapper.ts";

export class PgrouprRepository implements GroupRepository {
    constructor(private prisma: PrismaClient){}

    async create(group: Group): Promise<Group> {
        const persistedGroup = await this.prisma.groups.create({
            data: {
                name: group.name,
                users: {
                    connect: group.users.map((user) => ({id: user.id}))
                }
            },
            include: {users: true}
        })

        return GroupMapper.toDomain(persistedGroup)
    }
    async getAll(): Promise<Group[]> {
        const groups: any[] = await this.prisma.groups.findMany()
        return GroupMapper.toDomainList(groups)
    }
    async getById(id: string): Promise<Group> {
        const persistedGroup = await this.prisma.groups.findUnique({
            where: {
                id: id
            },
            include: {users: true}
        })
        return persistedGroup ? GroupMapper.toDomain(persistedGroup)
    }
    async update(group: Group, id: string): Promise<Group> {
        const updatedGroup = await this.prisma.groups.update({
            where: {
                id: id
            }, data: {
                name: group.name,
                users: {
                    connect: group.users.map((user) => ({id: user.id}))
                }
            },
            include: {users: true}
        })
        const response = GroupMapper.toDomain(updatedGroup)
        return response
    }
    async delete(id: string): Promise<boolean> {
        const success = await this.prisma.groups.deleteMany({
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