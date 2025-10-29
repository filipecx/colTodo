import { User } from "../entities/user.ts";

export interface UserRepository {
    create(user: User): Promise<User>
    getAll(): Promise<User[]>
    getById(id: string): Promise<User>
    updateUser(user: User, id: string): Promise<User>
    deleteUser(id: string): Promise<boolean>
}