import { describe, test, expect, vi } from 'vitest';

import {
    CharacterRepositoryGetAllResponse,
    CharacterRepositoryGetByIdResponse,
} from '../../../domain/ports/character.repository.port';
import { HttpClient } from '../../../adapters/http/httpClient';
import { createCharacterRepository } from './character.repository';

const mockClientGet = vi.fn();

describe('createCharacterRepository', () => {
    const mockHttpClient: HttpClient = {
        get: mockClientGet,
    };

    const characterRepository = createCharacterRepository(mockHttpClient);

    test('should call getAll with correct parameters', async () => {
        const mockResponse: CharacterRepositoryGetAllResponse = {
            data: {
                results: [],
                count: 0,
            },
        };

        mockClientGet.mockResolvedValue(mockResponse);

        const result = await characterRepository.getAll();
        expect(mockClientGet).toHaveBeenCalledWith('/characters', { limit: 50 });
        expect(result).toEqual(mockResponse);
    });

    test('should call getAllFilteredByName with correct parameters', async () => {
        const name = 'Spider';
        const mockResponse: CharacterRepositoryGetAllResponse = {
            data: {
                results: [],
                count: 0,
            },
        };

        mockClientGet.mockResolvedValue(mockResponse);

        const result = await characterRepository.getAllFilteredByName(name);
        expect(mockClientGet).toHaveBeenCalledWith('/characters', { limit: 50, nameStartsWith: name });
        expect(result).toEqual(mockResponse);
    });

    test('should call getCharacterById with correct parameters', async () => {
        const id = 1;
        const mockResponse: CharacterRepositoryGetByIdResponse = {
            data: {
                results: [
                    { id, name: 'Spider-Man', thumbnail: { path: '', extension: '' }, description: 'A superhero' },
                ],
            },
        };

        mockClientGet.mockResolvedValue(mockResponse);

        const result = await characterRepository.getCharacterById(id);
        expect(mockClientGet).toHaveBeenCalledWith(`/characters/${id}`);
        expect(result).toEqual(mockResponse);
    });
});
