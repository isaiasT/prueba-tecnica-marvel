import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { Navigation } from './Navigation';
import '@testing-library/jest-dom';
import { FavoriteCharactersContext } from '../../../../infrastructure/contexts/FavoriteCharacters/FavoriteCharactersContext';
import { Character } from '../../../../domain/entities/Character';

const mockAddFavorite = vi.fn();
const mockRemoveFavorite = vi.fn();
const mockFavorites: Character[] = [
    {
        id: 1,
        name: 'Test Character',
        thumbnail: { path: 'path/to/image', extension: 'jpg' },
        description: 'A description',
    },
];

describe('Navigation', () => {
    test('renders logo and favorites link', () => {
        render(
            <FavoriteCharactersContext.Provider
                value={{ favorites: mockFavorites, addFavorite: mockAddFavorite, removeFavorite: mockRemoveFavorite }}>
                <Navigation />
            </FavoriteCharactersContext.Provider>
        );

        expect(screen.getByAltText('Characters list')).toHaveAttribute('src', '/logo.svg');
        expect(screen.getByAltText('Favorite characters list')).toHaveAttribute('src', '/heart-filled.svg');
    });

    test('displays the number of favorite characters', () => {
        render(
            <FavoriteCharactersContext.Provider
                value={{ favorites: mockFavorites, addFavorite: mockAddFavorite, removeFavorite: mockRemoveFavorite }}>
                <Navigation />
            </FavoriteCharactersContext.Provider>
        );

        expect(screen.getByText('1')).toBeInTheDocument();
    });
});
