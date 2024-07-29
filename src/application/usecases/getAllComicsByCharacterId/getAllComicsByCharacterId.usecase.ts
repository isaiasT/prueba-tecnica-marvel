import { ComicRepository } from '../../../domain/ports/comic.repository.port';

export const getAllComicsByCharacterIdUsecase = (comicRepository: ComicRepository) => async (id: number) => {
    return comicRepository.getAllByCharacterId(id);
};
