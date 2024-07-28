import { CharacterRepository } from '../../../domain/ports/character.repository.port';

export const getAllCharactersUsecase = (characterRepository: CharacterRepository) => async () => {
    return characterRepository.getAll();
};
