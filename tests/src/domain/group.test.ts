import { describe, it, expect, assert, beforeEach} from 'vitest';
import { Task } from '../../../src/domain/entities/task.ts';
import { Group } from '../../../src/domain/entities/group.ts';
import { User } from '../../../src/domain/entities/user.ts';

describe('task creation test', () => {
    it('should be able to create a new group', () => {
        const group: Group = new Group({
            id: '123-group-uuid',
            name: 'groupname',
            users: [new User({
                id: '123-user-uuuid',
                username: 'Ane',
                password: '1234'
                
            })]
        })
    expect(group).toBeInstanceOf(Group);
    expect('123-group-uuid').toMatch(group.id);
    })

    it('should throw invalid value error', () => {
        expect( () => {
            new Group({
            id: "123-group-uuid",
            name: "",
            users: [new User({
                id: '123-user-uuuid',
                username: 'Ane',
                password: '1234'
                
            })]
        })}
        ).toThrow('O grupo deve ter um nome')
    })
})

describe('group changes test', () => {
    let group: Group;
    beforeEach(() => {
         group = new Group({
            id: '123-group-uuid',
            name: 'groupname',
            users: [new User({
                id: '123-user-uuuid',
                username: 'Ane',
                password: '1234'
                
            })]
    })})

    it('should be able to change completed to true', () => {
        group.changeName('abacatito')
        expect(group.name).toMatch('abacatito')
    })

    it('should throw InvalidValueError', () => {
        expect(() => group.changeName('')).toThrow('O grupo deve ter um nome')
    })
})