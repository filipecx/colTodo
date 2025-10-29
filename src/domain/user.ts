import { InvalidValueError } from "./Errors/InvalidValueError.ts"

export interface UserProps {
  id: string
  username: string
  password: string
}

export class User {
  constructor(private userProps: UserProps) {
    this.validatePassword(this.userProps.password)
    this.validateUsername(this.userProps.username)
  }

  get id(): string {
    return this.userProps.id
  }

  get username(): string {
    return this.userProps.username
  }

  get password(): string {
    return this.userProps.password
  }

  changePassword(newPassword: string): boolean {
    this.validatePassword(newPassword)
    this.userProps.password = newPassword
    return true
  }

  changeUsername(newUsername: string): void {
    this.validateUsername(newUsername)
    this.userProps.username = newUsername

  }
  validateUsername(username: string): void {
    if (username.length > 2) {
      return
    }
    throw new InvalidValueError('O nome de usuário deve ter pelo menos 2 caracteres')
  }

  validatePassword(password: string): void {
    if (password.length > 3) {
      return
    }
    throw new InvalidValueError('A senha deve ter pelo menos 4 caracteres')
  }
}
