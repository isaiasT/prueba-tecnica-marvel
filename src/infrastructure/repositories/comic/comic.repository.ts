import { HttpClient } from '../../../adapters/http/httpClient';
import {
    ComicRepository,
    ComicRepositoryGetAllByCharacterIdResponse,
} from '../../../domain/ports/comic.repository.port';

const LIMIT = 20;

export const createComicRepository = (httpClient: HttpClient): ComicRepository => {
    const getAllByCharacterId = async (id: number): Promise<ComicRepositoryGetAllByCharacterIdResponse> => {
        return httpClient.get<ComicRepositoryGetAllByCharacterIdResponse>(`/characters/${id}/comics`, { limit: LIMIT });
    };

    return {
        getAllByCharacterId,
    };
};
