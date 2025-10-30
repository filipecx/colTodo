import { PrismaClient } from "@prisma/client";
import { Group } from "../../domain/entities/group.ts";
import { GroupRepository } from "../../domain/interfaces/groupRepository.ts";
import { GroupMapper } from "../mappers/groupMapper.ts";

export class PgrouprRepository implements GroupRepository {
    constructor(private prisma: PrismaClient){}

    create(group: Group): Promise<Group> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<Group[]> {
        throw new Error("Method not implemented.");
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
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}