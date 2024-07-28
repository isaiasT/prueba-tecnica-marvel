import { createContext, useContext } from 'react';

import { Character } from '../../../domain/entities/Character';

interface FavoriteCharactersContextProps {
    favorites: Character[];
    addFavorite: (character: Character) => void;
    removeFavorite: (id: number) => void;
}

export const FavoriteCharactersContext = createContext<FavoriteCharactersContextProps | null>(null);

export const useFavoriteCharacters = (): FavoriteCharactersContextProps => {
    const context = useContext(FavoriteCharactersContext);
    if (!context) {
        throw new Error('useFavoriteCharacters must be used within a FavoriteCharactersProvider');
    }
    return context;
};
