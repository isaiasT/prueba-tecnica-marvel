import { describe, test, expect, vi } from 'vitest';

import { getAllCharactersFilteredByNameUsecase } from './getAllCharactersFilteredByName.usecase';
import { CharacterRepository } from '../../../domain/ports/character.repository.port';

describe('getAllCharactersFilteredByNameUsecase', () => {
    test('should call getAllFilteredByName on the character repository and return filtered data', async () => {
        const name = 'Spider-Man';
        const mockFilteredCharacters = [{ id: 1, name: 'Spider-Man', thumbnail: { path: '', extension: '' } }];

        const mockGetAllFilteredByName = vi.fn().mockResolvedValue(mockFilteredCharacters);

        const mockCharacterRepository: CharacterRepository = {
            getAll: vi.fn(),
            getCharacterById: vi.fn(),
            getAllFilteredByName: mockGetAllFilteredByName,
        };

        const usecase = getAllCharactersFilteredByNameUsecase(mockCharacterRepository);

        const result = await usecase(name);

        expect(mockGetAllFilteredByName).toHaveBeenCalledWith(name);
        expect(result).toEqual(mockFilteredCharacters);
    });

    test('should handle errors from the character repository when filtering by name', async () => {
        const name = 'Spider-Man';
        const mockError = new Error('Network Error');

        const mockGetAllFilteredByName = vi.fn().mockRejectedValue(mockError);

        const mockCharacterRepository: CharacterRepository = {
            getAll: vi.fn(),
            getCharacterById: vi.fn(),
            getAllFilteredByName: mockGetAllFilteredByName,
        };

        const usecase = getAllCharactersFilteredByNameUsecase(mockCharacterRepository);

        await expect(usecase(name)).rejects.toThrow('Network Error');
    });
});
