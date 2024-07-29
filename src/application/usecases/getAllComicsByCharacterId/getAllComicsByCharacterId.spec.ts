import { describe, test, expect, vi } from 'vitest';

import { getAllComicsByCharacterIdUsecase } from './getAllComicsByCharacterId.usecase';
import { ComicRepository } from '../../../domain/ports/comic.repository.port';

describe('getAllComicsByCharacterIdUsecase', () => {
    test('should call getAllByCharacterId on the comic repository and return comics', async () => {
        const id = 1;
        const mockComics = [{ id: 101, title: 'Comic 1', thumbnail: { path: '', extension: '' } }];

        const mockGetAllByCharacterId = vi.fn().mockResolvedValue(mockComics);

        const mockComicRepository: ComicRepository = {
            getAllByCharacterId: mockGetAllByCharacterId,
        };

        const usecase = getAllComicsByCharacterIdUsecase(mockComicRepository);

        const result = await usecase(id);

        expect(mockGetAllByCharacterId).toHaveBeenCalledWith(id);
        expect(result).toEqual(mockComics);
    });

    test('should handle errors from the comic repository when fetching comics by character id', async () => {
        const id = 1;
        const mockError = new Error('Network Error');

        const mockGetAllByCharacterId = vi.fn().mockRejectedValue(mockError);

        const mockComicRepository: ComicRepository = {
            getAllByCharacterId: mockGetAllByCharacterId,
        };

        const usecase = getAllComicsByCharacterIdUsecase(mockComicRepository);

        await expect(usecase(id)).rejects.toThrow('Network Error');
    });
});
