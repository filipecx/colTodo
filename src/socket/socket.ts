import { Socket, Server } from "socket.io";
import { Task } from "../domain/entities/task.ts";
import { UpdateTaskUseCase } from "../use-cases/task/updateTaskUseCase.ts";
import { PdailyTasksRepository } from "../repositories/dailyTasks/pDailyTasksRepository.ts";
import { prisma } from "../prisma/prismaService.ts";
import { UpdateDailyUseCase } from "../use-cases/dailyTasks/updateDailyUseCase.ts";


export class SocketTodo {
    private io: Server
    constructor(private httpServer: any) {
        this.io = new Server(httpServer)
        this.connect()
    }


    connect() {
        this.io.on('connection', (socket: Socket) => {

            socket.on('joinRoom', (roomId: string) => {
                socket.join(roomId)
                console.log(`SocketId: ${socket.id} entered room: ${roomId}`)
                socket.emit('joinedRoom', roomId)
            })

            socket.on('updateTask', (data) => {
                const taskRepo = new PdailyTasksRepository(prisma)
                const upTaskDaily = new UpdateDailyUseCase(taskRepo)
                const task = new Task({
                    id: data.taskId, 
                    title: data.taskTitle, 
                    userId: data.taskUserId, 
                    completed: data.taskCompleted
                })
                
            })

            socket.on('disconnect', () => {
                console.log('room disconected')
            })
        })
    }

    updateTask(roomId: string, task: Task) {
        
        this.io.to(roomId).emit("updateTask", task)
        console.log(`updated task: ${task.title} in room: ${roomId}`)
    }
}

