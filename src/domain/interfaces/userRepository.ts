import { User } from "../entities/user.ts";

export interface UserRepository {
    create(user: User): Promise<User>;
}