import { User } from "../../domain/entities/user.ts";

export class UserMapper {

    static toDomain(user: User): User {
        return new User({
            id: user.id,
            username: user.username,
            password: user.password
        })
    }

    static toDomainList(users: User[]): User[] {
        return users.map((user) => new User({
            id: user.id,
            username: user.username,
            password: user.password
        }))
    }

}