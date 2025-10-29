import { beforeEach, describe, expect, it } from "vitest";
import { DailyTasks, Day } from "../../../src/domain/entities/dailyTasks.ts";
import { Task } from "../../../src/domain/entities/task.ts";
import { User } from "../../../src/domain/entities/user.ts";

describe('daily task creation tests', () => {
    let task: Task
    let task2: Task
    const user: User = new User({
        id: '123-user-uuid',
        username: 'filipe',
        password: '1234'
    })
    beforeEach(() => {
        task = new Task({
            id: "123-task-uuid",
            title: "Lavar a louça da janta",
            user: user,
            completed: false
        })
        task2 = new Task({
            id: "124-task-uuid",
            title: "Varrer",
            user: user,
            completed: false
        })
    })
    it('should be able to create a daily tasks instance', () => {

        const daily: DailyTasks = new DailyTasks({
            id: '123-daily-uuid',
            day: Day.segunda,
            tasks: [task, task2]
        })
        expect(daily).toBeInstanceOf(DailyTasks)
        expect('123-daily-uuid').toMatch(daily.id)
        expect(daily.day).toBeOneOf(['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado', 'domingo'])
        expect(daily.tasks).toHaveLength(2)
        expect('123-task-uuid').toMatch(daily.tasks[0].id)
        expect('124-task-uuid').toMatch(daily.tasks[1].id)

    })
})