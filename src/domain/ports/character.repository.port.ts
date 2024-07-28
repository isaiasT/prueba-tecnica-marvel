import { Character } from '../entities/Character';

export interface CharacterRepositoryGetAllResponse {
    data: { results: Character[]; count: number };
}

export interface CharacterRepositoryGetByIdResponse {
    data: { results: Character[] };
}

export interface CharacterRepository {
    getAll(): Promise<CharacterRepositoryGetAllResponse>;
    getCharacterById(id: number): Promise<CharacterRepositoryGetByIdResponse>;
}
