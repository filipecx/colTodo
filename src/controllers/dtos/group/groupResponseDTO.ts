export interface GroupResponseDTO {
    id: string;
    name: string;
    users: [{id: string, username: string}]
}