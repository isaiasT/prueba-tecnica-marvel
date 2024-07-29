import { useRef, useState } from 'react';
import _ from 'lodash';

import { CharacterCard } from '../../adapters/ui/components/CharacterCard/CharacterCard';
import { CharacterCardGroup } from '../../adapters/ui/components/CharacterCardGroup/CharacterCardGroup';
import { SearchBar } from '../../adapters/ui/components/SearchBar/SearchBar';
import { useFavoriteCharacters } from '../../infrastructure/contexts/FavoriteCharacters/FavoriteCharactersContext';
import { FavoritesPageTitle, FavoritesPageTitleContainer } from './Page.styles';

function FavoritesPage() {
    const { favorites } = useFavoriteCharacters();
    const [filteredFavorites, setFilteredFavorites] = useState(favorites);
    const filteredFavoritesInContext = filteredFavorites.filter((favorite) =>
        favorites.some((f) => f.id === favorite.id)
    );

    const debouncedHandleInput = _.debounce((inputValue: string) => {
        if (inputValue === '') {
            setFilteredFavorites(favorites);
            return;
        }

        setFilteredFavorites(
            favorites.filter((favorite) => favorite.name.toLowerCase().includes(inputValue.toLowerCase()))
        );
    }, 300);

    const debouncedHandleInputRef = useRef(debouncedHandleInput);

    return (
        <FavoritesPageTitleContainer>
            <FavoritesPageTitle>FAVORITES</FavoritesPageTitle>
            <SearchBar count={filteredFavoritesInContext.length} handleInput={debouncedHandleInputRef.current} />
            <CharacterCardGroup>
                {filteredFavoritesInContext.map((favorite) => (
                    <CharacterCard key={favorite.id} character={favorite} />
                ))}
            </CharacterCardGroup>
        </FavoritesPageTitleContainer>
    );
}

export default FavoritesPage;
