import { CharacterRepository } from '../../../domain/ports/character.repository.port';

export const getCharacterByIdUsecase = (characterRepository: CharacterRepository) => async (id: number) => {
    return characterRepository.getCharacterById(id);
};
