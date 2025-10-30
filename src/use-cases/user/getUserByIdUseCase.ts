import { User } from "../../domain/entities/user.ts";
import { InvalidValueError } from "../../domain/Errors/InvalidValueError.ts";
import { UserRepository } from "../../domain/interfaces/userRepository.ts";

export class GetUserByIdUseCase {
    constructor(private repository: UserRepository){}

    async execute(id: string): Promise<User> {
        if (id == '') {
            throw new InvalidValueError("Nenhum id fornecido para encontrar usuário")
        }
        return await this.repository.getById(id);
    }
}