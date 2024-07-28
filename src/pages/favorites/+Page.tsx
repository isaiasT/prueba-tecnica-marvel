import CharacterCard from '../../adapters/ui/components/CharacterCard/CharacterCard';
import CharacterCardGroup from '../../adapters/ui/components/CharacterCardGroup/CharacterCardGroup';
import SearchBar from '../../adapters/ui/components/SearchBar/SearchBar';
import { FavoritesPageTitle, FavoritesPageTitleContainer } from './Page.styles';

function FavoritesPage() {
    return (
        <FavoritesPageTitleContainer>
            <FavoritesPageTitle>FAVORITES</FavoritesPageTitle>
            <SearchBar />
            <CharacterCardGroup>
                <CharacterCard name="Magneto" isFavorite={true} photoSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} photoSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} photoSrc="/magneto.png" />
            </CharacterCardGroup>
        </FavoritesPageTitleContainer>
    );
}

export default FavoritesPage;
