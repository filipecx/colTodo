import { InvalidValueError } from "../../domain/Errors/InvalidValueError.ts";
import { GroupRepository } from "../../domain/interfaces/groupRepository.ts";

export class DeleteGroupUseCase {
    constructor(private repository: GroupRepository) { }

    async execute(id: string): Promise<boolean> {
        if (id == '') {
            throw new InvalidValueError('Nenhum id fornecido para deletar grupo')
        }

        await this.repository.delete(id)
            return true

        
        
    }
}