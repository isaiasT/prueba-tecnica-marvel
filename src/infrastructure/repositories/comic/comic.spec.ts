import { describe, test, expect, vi } from 'vitest';

import { HttpClient } from '../../../adapters/http/httpClient';
import { createComicRepository } from './comic.repository'; // Ajusta la ruta según tu estructura
import { ComicRepositoryGetAllByCharacterIdResponse } from '../../../domain/ports/comic.repository.port';

const mockClientGet = vi.fn();

describe('createComicRepository', () => {
    const mockHttpClient: HttpClient = {
        get: mockClientGet,
    };

    const comicRepository = createComicRepository(mockHttpClient);

    test('should call getAllByCharacterId with correct parameters', async () => {
        const characterId = 1;
        const mockResponse: ComicRepositoryGetAllByCharacterIdResponse = {
            data: {
                results: [],
            },
        };

        mockClientGet.mockResolvedValue(mockResponse);

        const result = await comicRepository.getAllByCharacterId(characterId);
        expect(mockClientGet).toHaveBeenCalledWith(`/characters/${characterId}/comics`, { limit: 20 });
        expect(result).toEqual(mockResponse);
    });
});
