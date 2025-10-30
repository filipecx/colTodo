import { User } from "../../domain/entities/user.ts";
import { UserRepository } from "../../domain/interfaces/userRepository.ts";

export class GetAllUserUseCase {
    constructor(private repository: UserRepository){}

    async execute(): Promise<User[]> {
        return await this.repository.getAll();
    }
}