import { InvalidValueError } from "../Errors/InvalidValueError.ts";
import { User } from "./user.ts";

export interface GroupProps {
    id: string,
    name: string,
    users_id: string[]
}

export class Group {
    constructor(private groupProps: GroupProps) {
        this.validateName(groupProps.name)
        console.log('oi')
    }

    get id(): string {
        return this.groupProps.id
    }

    get name(): string {
        return this.groupProps.name
    }

    get users(): string[] {
        return this.groupProps.users_id
    }

    validateName(name: string): boolean {
        if (name == '') {
            throw new InvalidValueError('O grupo deve ter um nome')
        }
        return true
    }

    changeName(newName: string): void {
        if (this.validateName(newName)) {
            this.groupProps.name = newName
        }

    }

    addUser(newUserId: string): string[] {

        this.groupProps.users_id.push(newUserId)
        return this.users

    }

    removeUser(userId: string): string[] {
        
        return this.groupProps.users_id =  this.groupProps.users_id.filter((user) => user == userId)
    }
}