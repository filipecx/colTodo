import { describe, expect, it, vi } from "vitest";
import { GroupRepository } from "../../../../src/domain/interfaces/groupRepository.ts";
import { UserRepository } from "../../../../src/domain/interfaces/userRepository.ts";
import { AddUserUseCase } from "../../../../src/use-cases/group/addUserUseCase.ts";
import { GetGroupByIdUseCase } from "../../../../src/use-cases/group/getGroupByIdUseCase.ts";
import { GetUserByIdUseCase } from "../../../../src/use-cases/user/getUserByIdUseCase.ts";
import { UpdateGroupUseCase } from "../../../../src/use-cases/group/updateGroupUseCase.ts";
import { Group } from "../../../../src/domain/entities/group.ts";
import { User } from "../../../../src/domain/entities/user.ts";

describe('add user tests', () => {
    it('should be able to add a user in a group', async () => {
        let groupRepository: GroupRepository = {
            getById: vi.fn().mockResolvedValue(new Group({
                id: '123-group-uuid',
                name: 'group-name',
                users: []
            })),
            create: function (group: Group): Promise<Group> {
                throw new Error("Function not implemented.");
            },
            getAll: function (): Promise<Group[]> {
                throw new Error("Function not implemented.");
            },
            update: vi.fn().mockResolvedValue(new Group({
                id: '123-group-uuid',
                name: 'group-name',
                users: [new User({id: '123-user-uuid', username: 'username', password: '1234'})]
            }))
            ,
            delete: function (id: string): Promise<boolean> {
                throw new Error("Function not implemented.");
            }
        }
        let userRepository: UserRepository = {
            getById: vi.fn().mockResolvedValue(new User({
                id: '123-user-uuid',
                username: 'username',
                password: '1234'
            })),
            create: function (user: User): Promise<User> {
                throw new Error("Function not implemented.");
            },
            getAll: function (): Promise<User[]> {
                throw new Error("Function not implemented.");
            },
            updateUser: function (user: User, id: string): Promise<User> {
                throw new Error("Function not implemented.");
            },
            deleteUser: function (id: string): Promise<boolean> {
                throw new Error("Function not implemented.");
            }
        }




        const getGroup: GetGroupByIdUseCase = new GetGroupByIdUseCase(groupRepository)
        const getUser: GetUserByIdUseCase = new GetUserByIdUseCase(userRepository)

        const updateGroup: UpdateGroupUseCase = new UpdateGroupUseCase(groupRepository)

        const addUserService: AddUserUseCase = new AddUserUseCase(updateGroup, getGroup, getUser)
        const result = await addUserService.execute('123-group-uuid', '123-user-uuid')
        expect(result).toBeInstanceOf(Group)
        expect(result.users[0].id).toEqual('123-user-uuid')
    })
})