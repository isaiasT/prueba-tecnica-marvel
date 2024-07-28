import React, { useState, ReactNode } from 'react';

import { Character } from '../../../domain/entities/Character';
import { FavoriteCharactersContext } from './FavoriteCharactersContext';

export const FavoriteCharactersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<Character[]>([]);

    const addFavorite = (character: Character) => {
        setFavorites((prevFavorites) => [...prevFavorites, character]);
    };

    const removeFavorite = (id: number) => {
        setFavorites((prevFavorites) => prevFavorites.filter((character) => character.id !== id));
    };

    return (
        <FavoriteCharactersContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoriteCharactersContext.Provider>
    );
};
