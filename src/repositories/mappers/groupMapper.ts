import { Group } from "../../domain/entities/group.ts";

export class GroupMapper {
    static toDomain(group: Group) {
        return new Group({
            id: group.id,
            name: group.name,
            users: group.users
        })

    }

    static toDomainList(groups: Group[]) {
        return groups.map((group) => new Group({
            id: group.id,
            name: group.name,
            users: group.users
        }))
    }
}