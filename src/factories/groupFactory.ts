import { prisma } from "../prisma/prismaService.ts";
import { CreateGroupUseCase } from "../use-cases/group/createGroupUseCase.ts";
import { GetAllGroupsUseCase } from "../use-cases/group/getAllGroupsUseCase.ts";
import { GetGroupByIdUseCase } from "../use-cases/group/getGroupByIdUseCase.ts";
import { UpdateGroupUseCase } from "../use-cases/group/updateGroupUseCase.ts";
import { DeleteGroupUseCase } from "../use-cases/group/deleteGroupUseCase.ts";
import { PgrouprRepository } from "../repositories/group/pGroupRepository.ts";


const repository = new PgrouprRepository(prisma)

export function createUGroup {
    return new CreateGroupUseCase(repository)
}

export function getAllGroups() {
    return new GetAllGroupsUseCase(repository)

}

export function getGroupById() {
    return new GetGroupByIdUseCase(repository)
}

export function updateGroup() {
    return new UpdateGroupUseCase(repository)
}

export function deleteGroup() {
    return new DeleteGroupUseCase(repository)
}



