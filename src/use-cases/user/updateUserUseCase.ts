import { User } from "../../domain/entities/user.ts";
import { UserRepository } from "../../domain/interfaces/userRepository.ts";

export class UpdateUserUseCase {
    constructor(private repository: UserRepository){}

    async execute(user: User, id: string): Promise<User> {
        if (!user || id == '') {
            throw new Error("Informações fornecidas insuficientes para atualizar usuário")
        }
        return await this.repository.updateUser(user, id);
    }
}