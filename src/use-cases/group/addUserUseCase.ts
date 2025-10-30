import { Group } from "../../domain/entities/group.ts";
import { InvalidValueError } from "../../domain/Errors/InvalidValueError.ts";
import { GetUserByIdUseCase } from "../user/getUserByIdUseCase.ts";
import { GetGroupByIdUseCase } from "./getGroupByIdUseCase.ts";
import { UpdateGroupUseCase } from "./updateGroupUseCase.ts";

export class AddUserUseCase {
    constructor(
        private updateGroup: UpdateGroupUseCase,
        private getGroup: GetGroupByIdUseCase,
        private getUser: GetUserByIdUseCase
    ){}

    async execute(groupId: string, userId: string): Promise<Group> {
        if (groupId == '' || userId == '') {
            throw new InvalidValueError('Você precisa inserir id de um grupo e de um usuário')
        }
        const user = await this.getUser.execute(userId)
        const group = await this.getGroup.execute(groupId)

        group.addUser(user)

        return await this.updateGroup.execute(group, groupId)
    }
}