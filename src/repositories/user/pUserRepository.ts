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
}