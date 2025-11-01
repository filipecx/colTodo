import { prisma } from "../prisma/prismaService.ts";
import { CreateGroupUseCase } from "../use-cases/group/createGroupUseCase.ts";
import { GetAllGroupsUseCase } from "../use-cases/group/getAllGroupsUseCase.ts";
import { GetGroupByIdUseCase } from "../use-cases/group/getGroupByIdUseCase.ts";
import { UpdateGroupUseCase } from "../use-cases/group/updateGroupUseCase.ts";
import { DeleteGroupUseCase } from "../use-cases/group/deleteGroupUseCase.ts";
import { PgrouprRepository } from "../repositories/group/pGroupRepository.ts";
import { AddUserUseCase } from "../use-cases/group/addUserUseCase.ts";
import { GetUserByIdUseCase } from "../use-cases/user/getUserByIdUseCase.ts";
import { PuserRepository } from "../repositories/user/pUserRepository.ts";
import { RemoveUserFromGroupUseCase } from "../use-cases/group/removeUserFromGroupUseCase.ts";


const repository = new PgrouprRepository(prisma)
const userRepository = new PuserRepository(prisma)
const getUser = new GetUserByIdUseCase(userRepository)

export function addUserF() {
    return new AddUserUseCase(updateGroup(), getGroupById(), getUser)
}

export function removeUserF() {
    return new RemoveUserFromGroupUseCase(repository, getUser, getGroupById())
}

export function createUGroup() {
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



