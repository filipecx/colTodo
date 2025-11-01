import { Group } from "../../domain/entities/group.ts";
import { User } from "../../domain/entities/user.ts";



export type PrismaGroup = {
  id: string;
  name: string;
  users: { id: string; username: string; password: string }[];
}

export class GroupMapper {
    static toDomain(group: PrismaGroup): Group {
        return new Group({
            id: group.id,
            name: group.name,
            users:  group.users.map((user) => new User({id: user.id, username: user.username, password: user.password}))
        })

    }

    static toDomainList(groups: PrismaGroup[]): Group[]{
        return groups.map((group) => this.toDomain(group))
    }
}