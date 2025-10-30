import { Group } from "../../domain/entities/group.ts";
import { MissingEntityError } from "../../domain/Errors/MissingEntityError.ts";
import { GroupRepository } from "../../domain/interfaces/groupRepository.ts";

export class CreateGroupUseCase {
    constructor(private repository: GroupRepository){}

    async execute(group: Group): Promise<Group> {
        if (!group) {
            throw new MissingEntityError('Nenhum grupo fornecido para ser criado')
        }
        return this.repository.create(group)
    }
}