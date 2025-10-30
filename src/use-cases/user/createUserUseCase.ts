import { User } from "../../domain/entities/user.ts";
import { UserRepository } from "../../domain/interfaces/userRepository.ts";

export class CreateUserUseCase {
    constructor(private repository: UserRepository){}

    async execute(user: User) {
        if (!user) {
            throw new Error('Nenhum usuário encontrado para ser adicionado')
        }
        return await this.repository.create(user);
    }
}