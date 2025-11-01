import { Request, Response } from "express";
import { Group } from "../domain/entities/group.ts";
import { createUGroup, deleteGroup, getAllGroups, getGroupById, updateGroup } from "../factories/groupFactory.ts";
import { GroupResponseDTO } from "./dtos/group/groupResponseDTO.ts";
export async function create(request: Request, response: Response) {
    
    const groupDomain: Group = new Group({
        id: '',
        name: request.body.name,
        users: request.body.users
    })
    try {
        let usecase = createUGroup()
        const createdGroup = await usecase.execute(groupDomain)
        const responseGroup: GroupResponseDTO = {
            id: createdGroup.id,
            name: createdGroup.name,
            users: JSON.parse(createdGroup.users.toString())
        }
        response.status(201).json(responseGroup)
    } catch (error) {
        console.error(error)
        response.status(500).json({message: 'Internal server error'})
    }
}

export async function getAll(request: Request, response: Response) {
    const getAllUseCase = getAllGroups()
    try {
        let groups =  await getAllUseCase.execute()
        let result: GroupResponseDTO[] = groups.map((group) => ({
            id: group.id,
            name: group.name,
            users: JSON.parse(group.users.toString())
        }))
        response.status(200).json(result)
    } catch (error) {
        console.error(error)
        response.status(500).json({message: 'Internal server error'})
    }
}

export async function getUser(request: Request, response: Response) {
    const getGroup = getGroupById()
    try {
        let group =  await getGroup.execute(request.params.id)
        let result: GroupResponseDTO = {id: group.id, name: group.name, users: JSON.parse(group.users.toString())}
        response.status(200).json(result)
    } catch (error) {
        console.error(error)
        response.status(500).json({message: 'internal server error'})
    }
}

export async function update(request: Request, response: Response) {
    const updateGroupCase = updateGroup()
    const groupToUpdate = new Group({
        id: request.params.id,
        name: request.body.name,
        users: request.body.users
    })
    try {
        let group =  await updateGroupCase.execute(groupToUpdate, request.params.id)
        let result: GroupResponseDTO = {id: group.id, name: group.name, users: JSON.parse(group.users.toString())}
        response.status(200).json(result)
    } catch (error) {
        console.error(error)
        response.status(404).json({message: 'no user found'})
    }
}

export async function del(request: Request, response: Response) {
    const deleteG = deleteGroup()
    try {
        let success = await deleteG.execute(request.params.id)
        success ? response.status(200).json({message: 'group deletede'}): response.status(204).json({message: 'no group to delete'})
    } catch(error) {
        console.error(error)
        response.status(500).json({message: 'internal server error'})
    }
}