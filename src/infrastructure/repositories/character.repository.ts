import { HttpClient } from '../../adapters/http/httpClient';
import {
    CharacterRepository,
    CharacterRepositoryGetAllResponse,
    CharacterRepositoryGetByIdResponse,
} from '../../domain/ports/character.repository.port';

const LIMIT = 2;

export const createCharacterRepository = (httpClient: HttpClient): CharacterRepository => {
    const getAll = async (): Promise<CharacterRepositoryGetAllResponse> => {
        return httpClient.get<CharacterRepositoryGetAllResponse>('/characters', { limit: LIMIT });
    };

    const getAllFilteredByName = async (name: string): Promise<CharacterRepositoryGetAllResponse> => {
        return httpClient.get<CharacterRepositoryGetAllResponse>('/characters', { limit: LIMIT, nameStartsWith: name });
    };

    const getCharacterById = async (id: number): Promise<CharacterRepositoryGetByIdResponse> => {
        return httpClient.get<CharacterRepositoryGetByIdResponse>(`/characters/${id}`);
    };

    return {
        getAll,
        getAllFilteredByName,
        getCharacterById,
    };
};
