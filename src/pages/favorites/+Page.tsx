import { CharacterCard } from '../../adapters/ui/components/CharacterCard/CharacterCard';
import { CharacterCardGroup } from '../../adapters/ui/components/CharacterCardGroup/CharacterCardGroup';
import { SearchBar } from '../../adapters/ui/components/SearchBar/SearchBar';
import { useFavoriteCharacters } from '../../infrastructure/contexts/FavoriteCharacters/FavoriteCharactersContext';
import { FavoritesPageTitle, FavoritesPageTitleContainer } from './Page.styles';

function FavoritesPage() {
    const { favorites } = useFavoriteCharacters();

    return (
        <FavoritesPageTitleContainer>
            <FavoritesPageTitle>FAVORITES</FavoritesPageTitle>
            <SearchBar count={favorites.length} />
            <CharacterCardGroup>
                {favorites.map((favorite) => (
                    <CharacterCard key={favorite.id} character={favorite} />
                ))}
            </CharacterCardGroup>
        </FavoritesPageTitleContainer>
    );
}

export default FavoritesPage;
