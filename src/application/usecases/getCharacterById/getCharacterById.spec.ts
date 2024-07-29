import { describe, test, expect, vi } from 'vitest';

import { getCharacterByIdUsecase } from './getCharacterById.usecase';
import { CharacterRepository } from '../../../domain/ports/character.repository.port';

describe('getCharacterByIdUsecase', () => {
    test('should call getCharacterById on the character repository and return the character', async () => {
        const id = 1;
        const mockCharacter = { id: 1, name: 'Character 1', thumbnail: { path: '', extension: '' } };

        const mockGetCharacterById = vi.fn().mockResolvedValue(mockCharacter);

        const mockCharacterRepository: CharacterRepository = {
            getAll: vi.fn(),
            getCharacterById: mockGetCharacterById,
            getAllFilteredByName: vi.fn(),
        };

        const usecase = getCharacterByIdUsecase(mockCharacterRepository);

        const result = await usecase(id);

        expect(mockGetCharacterById).toHaveBeenCalledWith(id);
        expect(result).toEqual(mockCharacter);
    });

    test('should handle errors from the character repository when fetching character by id', async () => {
        const id = 1;
        const mockError = new Error('Network Error');

        const mockGetCharacterById = vi.fn().mockRejectedValue(mockError);

        const mockCharacterRepository: CharacterRepository = {
            getAll: vi.fn(),
            getCharacterById: mockGetCharacterById,
            getAllFilteredByName: vi.fn(),
        };

        const usecase = getCharacterByIdUsecase(mockCharacterRepository);

        await expect(usecase(id)).rejects.toThrow('Network Error');
    });
});
