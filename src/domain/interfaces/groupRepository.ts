import { Group } from "../entities/group.ts"

export interface GroupRepository {
    create(group: Group): Promise<Group>
    getAll(): Promise<Group[]>
    getById(id: string): Promise<Group | null>
    update(group: Group, id: string): Promise<Group>
    delete(id: string): Promise<boolean>
}