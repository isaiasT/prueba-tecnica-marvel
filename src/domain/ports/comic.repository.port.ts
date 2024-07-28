import { Comic } from '../entities/Comic';

export interface ComicRepositoryGetAllByCharacterIdResponse {
    data: { results: Comic[] };
}

export interface ComicRepository {
    getAllByCharacterId(id: number): Promise<ComicRepositoryGetAllByCharacterIdResponse>;
}
