import { Group } from "../../domain/entities/group.ts";
import { InvalidValueError } from "../../domain/Errors/InvalidValueError.ts";
import { GroupRepository } from "../../domain/interfaces/groupRepository.ts";
import { GetUserByIdUseCase } from "../user/getUserByIdUseCase.ts";
import { GetGroupByIdUseCase } from "./getGroupByIdUseCase.ts";

export class RemoveUserFromGroupUseCase {
    constructor(private repository: GroupRepository, private getUser: GetUserByIdUseCase, private getGroup: GetGroupByIdUseCase) { }

    async execute(groupId: string, userId: string): Promise<Group> {
        if (groupId == '' || userId == '') {
            throw new InvalidValueError('Nenhum id de grupo ou usuário fornecido')
        }
        const group = await this.getGroup.execute(userId)
        await this.getUser.execute(userId)

        group.removeUser(userId)

        return this.repository.update(group, groupId)
    }
}