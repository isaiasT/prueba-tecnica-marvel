import CharacterCard from '../../adapters/ui/components/CharacterCard/CharacterCard';
import CharacterCardGroup from '../../adapters/ui/components/CharacterCardGroup/CharacterCardGroup';
import SearchBar from '../../adapters/ui/components/SearchBar/SearchBar';
import { CharactersPageContainer } from './Page.styles';

function CharactersPage() {
    return (
        <CharactersPageContainer>
            <SearchBar />
            <CharacterCardGroup>
                <CharacterCard name="Magneto" isFavorite={false} photoSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} photoSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={false} photoSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} photoSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={false} photoSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} photoSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={false} photoSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} photoSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={false} photoSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} photoSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={false} photoSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} photoSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={false} photoSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} photoSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={false} photoSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} photoSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={false} photoSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} photoSrc="/magneto.png" />
            </CharacterCardGroup>
        </CharactersPageContainer>
    );
}

export default CharactersPage;
