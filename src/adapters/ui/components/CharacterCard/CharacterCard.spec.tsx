import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { CharacterCard } from './CharacterCard';
import { Character } from '../../../../domain/entities/Character';
import { FavoriteCharactersContext } from '../../../../infrastructure/contexts/FavoriteCharacters/FavoriteCharactersContext';

const mockAddFavorite = vi.fn();
const mockRemoveFavorite = vi.fn();
const mockFavorites: Character[] = [];

const mockCharacter = {
    id: 1,
    name: 'Spider-Man',
    description: 'A description',
    thumbnail: {
        path: 'https://example.com/spiderman',
        extension: 'jpg',
    },
};

describe('CharacterCard', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('renders character information correctly', () => {
        render(
            <FavoriteCharactersContext.Provider
                value={{ favorites: mockFavorites, addFavorite: mockAddFavorite, removeFavorite: mockRemoveFavorite }}>
                <CharacterCard character={mockCharacter} />
            </FavoriteCharactersContext.Provider>
        );

        expect(screen.getByText('Spider-Man')).toBeInTheDocument();
        const img = screen.getByAltText('Spider-Man');
        expect(img).toHaveAttribute('src', 'https://example.com/spiderman.jpg');
    });

    test('adds character to favorites when not a favorite', () => {
        render(
            <FavoriteCharactersContext.Provider
                value={{ favorites: mockFavorites, addFavorite: mockAddFavorite, removeFavorite: mockRemoveFavorite }}>
                <CharacterCard character={mockCharacter} />
            </FavoriteCharactersContext.Provider>
        );

        const favoriteButton = screen.getByRole('button');
        fireEvent.click(favoriteButton);

        expect(mockAddFavorite).toHaveBeenCalledWith(mockCharacter);
    });

    test('removes character from favorites when already a favorite', () => {
        render(
            <FavoriteCharactersContext.Provider
                value={{
                    favorites: [mockCharacter],
                    addFavorite: mockAddFavorite,
                    removeFavorite: mockRemoveFavorite,
                }}>
                <CharacterCard character={mockCharacter} />
            </FavoriteCharactersContext.Provider>
        );

        const favoriteButton = screen.getByRole('button');
        fireEvent.click(favoriteButton);

        expect(mockRemoveFavorite).toHaveBeenCalledWith(mockCharacter.id);
    });
});
