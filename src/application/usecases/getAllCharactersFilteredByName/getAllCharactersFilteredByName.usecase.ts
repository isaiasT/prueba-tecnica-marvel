import { CharacterRepository } from '../../../domain/ports/character.repository.port';

export const getAllCharactersFilteredByNameUsecase =
    (characterRepository: CharacterRepository) => async (name: string) => {
        return characterRepository.getAllFilteredByName(name);
    };
