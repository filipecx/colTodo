import { PuserRepository } from "../repositories/user/pUserRepository.ts";
import { prisma } from "../prisma/prismaService.ts";
import { CreateUserUseCase } from "../use-cases/user/createUserUseCase.ts";
import { GetAllUserUseCase } from "../use-cases/user/getAllUsersUseCase.ts";
import { GetUserByIdUseCase } from "../use-cases/user/getUserByIdUseCase.ts";
import { UpdateUserUseCase } from "../use-cases/user/updateUserUseCase.ts";
import { DeleteUserUseCase } from "../use-cases/user/deleteUserUseCase.ts";


const repository = new PuserRepository(prisma)

export function createUser() {
    return new CreateUserUseCase(repository)
}

export function getAllUsers() {
    return new GetAllUserUseCase(repository)

}

export function getUserById() {
    return new GetUserByIdUseCase(repository)
}

export function updateUser() {
    return new UpdateUserUseCase(repository)
}

export function deleteUser() {
    return new DeleteUserUseCase(repository)
}



