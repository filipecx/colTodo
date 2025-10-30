import { UserRepository } from "../../domain/interfaces/userRepository.ts";

export class DeleteUserUseCase {
    constructor(private repository: UserRepository){}

    async execute(id: string): Promise<boolean> {
        if (id == '') {
            throw new Error('Nenhum id fornecido para remover usuário')
        }
        let success = await this.repository.deleteUser(id);
        if (success) {
            return true
        }
        return false;
    }
 }