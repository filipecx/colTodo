import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../../domain/interfaces/userRepository.ts";
import { User } from "../../domain/entities/user.ts";
import { UserMapper } from "../mappers/userMapper.ts";

export class PuserRepository implements UserRepository {
    constructor(private prisma: PrismaClient){}

    async create(user: User): Promise<User> {
        const persistedUser = await this.prisma.users.create({
            data: {
                username: user.username,
                password: user.password
            }
        })

        return UserMapper.toDomain(persistedUser)
    }

    async getAll(): Promise<User[]> {
        return UserMapper.toDomainList(await this.prisma.users.findMany())
    }

    async getById(id: string): Promise<User> {
        return UserMapper.toDomain(await this.prisma.users.findUnique({where: {id: id}}))
    }

    async updateUser(user: User, id: string): Promise<User> {
        return UserMapper.toDomain(await this.prisma.users.update({
            where: {id: id}, 
            data: {
                username: user.username,
                password: user.password
            }
    }))
    }

    async deleteUser(id: string): Promise<boolean> {
        const success = await this.prisma.users.deleteMany({
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