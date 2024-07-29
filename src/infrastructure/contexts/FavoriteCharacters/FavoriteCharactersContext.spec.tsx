import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import React from 'react';

import { FavoriteCharactersContext, useFavoriteCharacters } from './FavoriteCharactersContext';
import { Character } from '../../../domain/entities/Character';

describe('useFavoriteCharacters', () => {
    test('should throw an error if used outside of FavoriteCharactersProvider', () => {
        const TestComponent = () => {
            useFavoriteCharacters();
            return null;
        };

        expect(() => render(<TestComponent />)).toThrow(
            'useFavoriteCharacters must be used within a FavoriteCharactersProvider'
        );
    });

    test('should return context values correctly when used within a provider', () => {
        const mockAddFavorite = vi.fn();
        const mockRemoveFavorite = vi.fn();
        const mockFavorites: Character[] = [
            { id: 1, name: 'Character 1', thumbnail: { path: '', extension: '' }, description: '' },
        ];

        const TestProvider = ({ children }: { children: React.ReactNode }) => (
            <FavoriteCharactersContext.Provider
                value={{
                    favorites: mockFavorites,
                    addFavorite: mockAddFavorite,
                    removeFavorite: mockRemoveFavorite,
                }}>
                {children}
            </FavoriteCharactersContext.Provider>
        );

        const TestComponent = () => {
            const { favorites, addFavorite, removeFavorite } = useFavoriteCharacters();
            return (
                <div>
                    <div data-testid="favorites-length">{favorites.length}</div>
                    <button onClick={() => addFavorite(mockFavorites[0])}>Add Favorite</button>
                    <button onClick={() => removeFavorite(mockFavorites[0].id)}>Remove Favorite</button>
                </div>
            );
        };

        render(
            <TestProvider>
                <TestComponent />
            </TestProvider>
        );

        expect(screen.getByTestId('favorites-length')).toHaveTextContent('1');
        screen.getByText('Add Favorite').click();
        screen.getByText('Remove Favorite').click();

        expect(mockAddFavorite).toHaveBeenCalledWith(mockFavorites[0]);
        expect(mockRemoveFavorite).toHaveBeenCalledWith(mockFavorites[0].id);
    });
});

const mockAddFavorite = vi.fn();
const mockRemoveFavorite = vi.fn();
const mockFavorites: Character[] = [];

describe('FavoriteCharactersProvider', () => {
    test('should initialize with an empty favorites list', () => {
        const TestComponent = () => {
            const context = React.useContext(FavoriteCharactersContext);
            if (!context) throw new Error('FavoriteCharactersContext is null');
            const { favorites } = context;
            return <div data-testid="favorites-length">{favorites.length}</div>;
        };

        render(
            <FavoriteCharactersContext.Provider
                value={{ favorites: mockFavorites, addFavorite: mockAddFavorite, removeFavorite: mockRemoveFavorite }}>
                <TestComponent />
            </FavoriteCharactersContext.Provider>
        );

        expect(screen.getByTestId('favorites-length')).toHaveTextContent('0');
    });

    test('should add a favorite correctly', () => {
        const mockCharacter: Character = {
            id: 1,
            name: 'Character 1',
            thumbnail: { path: '', extension: '' },
            description: 'Test',
        };

        const mockAddFavorite = vi.fn();
        const mockRemoveFavorite = vi.fn();
        const mockFavorites: Character[] = [];

        const TestComponent = () => {
            const context = React.useContext(FavoriteCharactersContext);
            if (!context) throw new Error('FavoriteCharactersContext is null');
            const { favorites, addFavorite } = context;

            return (
                <div>
                    <div data-testid="favorites-length">{favorites.length}</div>
                    <button onClick={() => addFavorite(mockCharacter)}>Add Favorite</button>
                </div>
            );
        };

        render(
            <FavoriteCharactersContext.Provider
                value={{ favorites: mockFavorites, addFavorite: mockAddFavorite, removeFavorite: mockRemoveFavorite }}>
                <TestComponent />
            </FavoriteCharactersContext.Provider>
        );

        expect(screen.getByTestId('favorites-length')).toHaveTextContent('0');
        fireEvent.click(screen.getByText('Add Favorite'));
        expect(mockAddFavorite).toHaveBeenCalledWith(mockCharacter);
    });

    test('should remove a favorite correctly', () => {
        const mockCharacter: Character = {
            id: 1,
            name: 'Character 1',
            thumbnail: { path: '', extension: '' },
            description: 'Test',
        };

        const mockAddFavorite = vi.fn();
        const mockRemoveFavorite = vi.fn();
        const mockFavorites: Character[] = [mockCharacter];

        const TestComponent = () => {
            const context = React.useContext(FavoriteCharactersContext);
            if (!context) throw new Error('FavoriteCharactersContext is null');
            const { favorites, addFavorite, removeFavorite } = context;

            return (
                <div>
                    <div data-testid="favorites-length">{favorites.length}</div>
                    <button onClick={() => addFavorite(mockCharacter)}>Add Favorite</button>
                    <button onClick={() => removeFavorite(mockCharacter.id)}>Remove Favorite</button>
                </div>
            );
        };

        render(
            <FavoriteCharactersContext.Provider
                value={{ favorites: mockFavorites, addFavorite: mockAddFavorite, removeFavorite: mockRemoveFavorite }}>
                <TestComponent />
            </FavoriteCharactersContext.Provider>
        );

        expect(screen.getByTestId('favorites-length')).toHaveTextContent('1');
        fireEvent.click(screen.getByText('Remove Favorite'));
        expect(mockRemoveFavorite).toHaveBeenCalledWith(mockCharacter.id);
    });
});
