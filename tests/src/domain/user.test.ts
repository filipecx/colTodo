import { describe, expect, it } from "vitest";
import { User } from "../../../src/domain/user.ts";

describe('user creation tests', () => {
  it('should be able to create a new user', () => {
    const user: User = new User({
      id: '123-user-uuid',
      username: 'filipe',
      password: '1234',
      groups: 'aun'
    })
    expect(user).toBeInstanceOf(User)
    expect(user.id).toMatch('123-user-uuid')
    expect(user.username).toMatch('filipe')
    expect(user.password).toMatch('1234')

  })
})
