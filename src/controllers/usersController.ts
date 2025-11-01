import { Request, Response } from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../factories/userFactory.ts";
import { UserResponseDTO } from "./dtos/user/userResponseDto.ts";
import { User } from "../domain/entities/user.ts";

export async function create(request: Request, response: Response) {
    
    const userDomain: User = new User({
        username: request.body.username,
        password: request.body.password
    })
    try {
        let usecase = createUser()
        const createdUser = await usecase.execute(userDomain)
        const responseUser: UserResponseDTO = {
            id: createdUser.id,
            username: createdUser.username,
        }
        response.status(201).json(responseUser)
    } catch (error) {
        console.error(error)
        response.status(500).json({message: 'Internal server error'})
    }
}

export async function getAll(request: Request, response: Response) {
    const getAllUseCase = getAllUsers()
    try {
        let users =  await getAllUseCase.execute()
        let result: UserResponseDTO[] = users.map((user) => ({
            id: user.id,
            username: user.username
        }))
        response.status(200).json(result)
    } catch (error) {
        console.error(error)
        response.status(500).json({message: 'Internal server error'})
    }
}

export async function getUser(request: Request, response: Response) {
    const getUser = getUserById()
    try {
        let user =  await getUser.execute(request.params.id)
        let result: UserResponseDTO = {id: user.id, username: user.username}
        response.status(200).json(result)
    } catch (error) {
        console.error(error)
        response.status(500).json({message: 'internal server error'})
    }
}

export async function update(request: Request, response: Response) {
    const updateUserCase = updateUser()
    const userToUpdate = new User({
        username: request.body.username,
        password: request.body.password
    })
    try {
        let user =  await updateUserCase.execute(userToUpdate, request.params.id)
        let result: UserResponseDTO = {id: user.id, username: user.username}
        response.status(200).json(result)
    } catch (error) {
        console.error(error)
        response.status(404).json({message: 'no user found'})
    }
}

export async function del(request: Request, response: Response) {
    const deleteU = deleteUser()
    try {
        let success = await deleteU.execute(request.params.id)
        success ? response.status(200).json({message: 'user deletede'}): response.status(204).json({message: 'no user to delete'})
    } catch(error) {
        console.error(error)
        response.status(500).json({message: 'internal server error'})
    }
}