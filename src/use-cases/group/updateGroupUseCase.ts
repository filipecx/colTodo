import { Group } from "../../domain/entities/group.ts";
import { InvalidValueError } from "../../domain/Errors/InvalidValueError.ts";
import { MissingEntityError } from "../../domain/Errors/MissingEntityError.ts";
import { GroupRepository } from "../../domain/interfaces/groupRepository.ts";

export class UpdateGroupUseCase {
    constructor(private repository: GroupRepository){}

    async execute(group: Group, id: string): Promise<Group> {
        if (!group) {
            throw new MissingEntityError('Nenhum grupo fornecido')
        }
        if (id == '') {
            throw new InvalidValueError('Nenhum id para grupo fornecido')
        }
        return this.repository.update(group, id)
    }
}