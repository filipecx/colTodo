import { describe, it, expect, assert, beforeEach} from 'vitest';
import { Task } from '../../../src/domain/task.ts';

describe('task creation test', () => {
    it('should be able to create a new task', () => {
        const task = new Task({
            id: "123-task-uuid",
            title: "Lavar a louça da janta",
            completed: false
        })
    expect(task).toBeInstanceOf(Task);
    expect('123-task-uuid').toMatch(task.id);
    expect("Lavar a louça da janta").toMatch(task.title);
    expect(task.completed).toBeFalsy
    })

    it('should throw invalid value error', () => {
        expect( () => {
            new Task({
            id: "123-task-uuid",
            title: "",
            completed: false
        })}
        ).toThrow('Você deve inserir um título')
    })
})

describe('task changes test', () => {
    let task: Task;
    beforeEach(() => {
        task = new Task({
            id: "123-task-uuid",
            title: "Lavar a louça da janta",
            completed: false
        })
    })

    it('should be able to change completed to true', () => {
        task.changeStatus()
        expect(task.completed).toBeTruthy
    })

    it('should be ablte to change task title', () => {
        task.changeTitle('New title')
        expect('New title').toMatch(task.title)
    })

    it('should throw InvalidValueError', () => {
        expect(() => task.changeTitle('')).toThrow('Você deve inserir um título')
    })
})