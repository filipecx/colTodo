import { Group } from "../../domain/entities/group.ts";
import { InvalidValueError } from "../../domain/Errors/InvalidValueError.ts";
import { GroupRepository } from "../../domain/interfaces/groupRepository.ts";

export class GetGroupByIdUseCase {
    constructor(private repository: GroupRepository){}

    async execute(id: string): Promise<Group> {
        if (id == '') {
            throw new InvalidValueError('Nenhum id para grupo fornecido')
        }
        return this.repository.getById(id)
    }
}