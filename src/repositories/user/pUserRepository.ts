import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../../domain/interfaces/userRepository.ts";
import { User } from "../../domain/entities/user.ts";

export class PuserRepository implements UserRepository {
    constructor(private prisma: PrismaClient){}

    async create(user: User): Promise<User> {
        const persistedUser = await this.prisma.users.create({
            data: {
                username: user.username,
                password: user.password
            }
        })

        const userDomain: User = new User({
            id: persistedUser.id,
            username: persistedUser.username,
            password: persistedUser.password
        })

        return userDomain
    }

    async getAll(): Promise<User[]> {
        throw new Error("not implemented")
    }

    async getById(id: string): Promise<User> {
        throw new Error("not implemented")
    }

    async updateUser(user: User, id: string): Promise<User> {
        throw new Error("not implemented")
    }

    async deleteUser(id: string): Promise<boolean> {
        throw new Error("not implemented")
    }
}