import CharacterCard from '../../adapters/ui/components/CharacterCard/CharacterCard';
import CharacterCardGroup from '../../adapters/ui/components/CharacterCardGroup/CharacterCardGroup';
import SearchBar from '../../adapters/ui/components/SearchBar/SearchBar';

function CharactersPage() {
    return (
        <>
            <SearchBar />
            <CharacterCardGroup>
                <CharacterCard name="Magneto" isFavorite={false} imageSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} imageSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={false} imageSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} imageSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={false} imageSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} imageSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={false} imageSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} imageSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={false} imageSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} imageSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={false} imageSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} imageSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={false} imageSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} imageSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={false} imageSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} imageSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={false} imageSrc="/magneto.png" />
                <CharacterCard name="Magneto" isFavorite={true} imageSrc="/magneto.png" />
            </CharacterCardGroup>
        </>
    );
}

export default CharactersPage;
