import { describe, test, expect, vi } from 'vitest';

import { getAllCharactersUsecase } from './getAllCharacters.usecase';
import { CharacterRepository } from '../../../domain/ports/character.repository.port';

describe('getAllCharactersUsecase', () => {
    test('should call getAll on the character repository and return data', async () => {
        const mockCharacters = [{ id: 1, name: 'Spider-Man', thumbnail: { path: '', extension: '' } }];
        const mockGetAll = vi.fn().mockResolvedValue(mockCharacters);
        const mockCharacterRepository: CharacterRepository = {
            getAll: mockGetAll,
            getAllFilteredByName: vi.fn(),
            getCharacterById: vi.fn(),
        };

        const usecase = getAllCharactersUsecase(mockCharacterRepository);

        const result = await usecase();

        expect(mockGetAll).toHaveBeenCalled();
        expect(result).toEqual(mockCharacters);
    });

    test('should handle errors from the character repository', async () => {
        const mockError = new Error('Network Error');
        const mockCharacterRepository: CharacterRepository = {
            getAll: vi.fn().mockRejectedValue(mockError),
            getAllFilteredByName: vi.fn(),
            getCharacterById: vi.fn(),
        };

        const usecase = getAllCharactersUsecase(mockCharacterRepository);

        await expect(usecase()).rejects.toThrow('Network Error');
    });
});
