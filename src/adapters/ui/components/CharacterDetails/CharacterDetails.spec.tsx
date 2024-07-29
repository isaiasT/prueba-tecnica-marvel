import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test, vi, beforeEach } from 'vitest';

import { CharacterDetails } from './CharacterDetails';
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

describe('CharacterDetails', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('renders character details correctly', () => {
        render(
            <FavoriteCharactersContext.Provider
                value={{ favorites: mockFavorites, addFavorite: mockAddFavorite, removeFavorite: mockRemoveFavorite }}>
                <CharacterDetails character={mockCharacter} />
            </FavoriteCharactersContext.Provider>
        );

        expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
        expect(screen.getByText(mockCharacter.description)).toBeInTheDocument();

        expect(screen.getByAltText(mockCharacter.name)).toHaveAttribute(
            'src',
            `${mockCharacter.thumbnail.path}.${mockCharacter.thumbnail.extension}`
        );
    });

    test('renders favorite icon correctly based on favorite status (empty)', () => {
        render(
            <FavoriteCharactersContext.Provider
                value={{
                    favorites: mockFavorites,
                    addFavorite: mockAddFavorite,
                    removeFavorite: mockRemoveFavorite,
                }}>
                <CharacterDetails character={mockCharacter} />
            </FavoriteCharactersContext.Provider>
        );

        expect(screen.getByAltText('Favorite icon')).toHaveAttribute('src', '/heart-empty.svg');
    });

    test('renders favorite icon correctly based on favorite status (filled)', () => {
        render(
            <FavoriteCharactersContext.Provider
                value={{
                    favorites: [mockCharacter],
                    addFavorite: mockAddFavorite,
                    removeFavorite: mockRemoveFavorite,
                }}>
                <CharacterDetails character={mockCharacter} />
            </FavoriteCharactersContext.Provider>
        );

        expect(screen.getByAltText('Favorite icon')).toHaveAttribute('src', '/heart-filled.svg');
    });

    test('calls addFavorite when the favorite icon is clicked and character is not a favorite', () => {
        render(
            <FavoriteCharactersContext.Provider
                value={{
                    favorites: mockFavorites,
                    addFavorite: mockAddFavorite,
                    removeFavorite: mockRemoveFavorite,
                }}>
                <CharacterDetails character={mockCharacter} />
            </FavoriteCharactersContext.Provider>
        );

        const favoriteIcon = screen.getByAltText('Favorite icon');
        fireEvent.click(favoriteIcon);

        expect(mockAddFavorite).toHaveBeenCalledWith(mockCharacter);
    });

    test('calls removeFavorite when the favorite icon is clicked and character is a favorite', () => {
        render(
            <FavoriteCharactersContext.Provider
                value={{
                    favorites: [mockCharacter],
                    addFavorite: mockAddFavorite,
                    removeFavorite: mockRemoveFavorite,
                }}>
                <CharacterDetails character={mockCharacter} />
            </FavoriteCharactersContext.Provider>
        );

        const favoriteIcon = screen.getByAltText('Favorite icon');
        fireEvent.click(favoriteIcon);

        expect(mockRemoveFavorite).toHaveBeenCalledWith(mockCharacter.id);
    });
});
