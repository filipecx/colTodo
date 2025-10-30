import { Group } from "../../domain/entities/group.ts";
import { GroupRepository } from "../../domain/interfaces/groupRepository.ts";

export class GetAllGroupsUseCase {
    constructor(private repository: GroupRepository){}

    async execute(): Promise<Group[]> {
        return this.repository.getAll()
    }
}