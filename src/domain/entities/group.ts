import { InvalidValueError } from "../Errors/InvalidValueError.ts";
import { User } from "./user.ts";

export interface GroupProps {
    id: string,
    name: string,
    users: User[]
}

export class Group {
    constructor(private groupProps: GroupProps){
        this.validateName(groupProps.name)
        console.log('oi')
    }

    get id(): string {
        return this.groupProps.id
    }

    get name(): string {
        return this.groupProps.name
    }

    get users(): User[] {
        return this.groupProps.users
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

    addUser(newUser: User): User[] {
        if (newUser) {
            this.groupProps.users.push(newUser)
            return this.users
        }
    }

    removeUser(userId: string): User[] {
        return this.groupProps.users.filter((user) => user.id == userId)
    }
}