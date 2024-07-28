import { Character } from '../../../../domain/entities/Character';
import { useFavoriteCharacters } from '../../../../infrastructure/contexts/FavoriteCharacters/FavoriteCharactersContext';
import {
    CharacterDetailsContainer,
    CharacterDetailsContainerCentered,
    CharacterDetailsContainerRightCut,
    CharacterDetailsPhoto,
    CharacterDetailsPhotoWrapper,
    CharacterDetailsNameContainer,
    CharacterDetailsWrapper,
    CharacterDetailsName,
    CharacterDetailsFavoriteIcon,
    CharacterDetailsDescription,
    CharacterDetailsWrapper2,
} from './CharacterDetails.styles';

interface CharacterDetailsProps {
    character: Character;
}

export function CharacterDetails({ character }: CharacterDetailsProps) {
    const { addFavorite, removeFavorite, favorites } = useFavoriteCharacters();
    const { id, name, description, thumbnail } = character;
    const isFavorite = favorites.some((favorite) => favorite.id === id);

    const handleFavoriteClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        event.preventDefault();

        isFavorite ? removeFavorite(id) : addFavorite(character);
    };

    return (
        <CharacterDetailsContainer>
            <CharacterDetailsContainerCentered>
                <CharacterDetailsPhotoWrapper>
                    <CharacterDetailsPhoto src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
                </CharacterDetailsPhotoWrapper>
                <CharacterDetailsWrapper>
                    <CharacterDetailsWrapper2>
                        <CharacterDetailsNameContainer>
                            <CharacterDetailsName>{name}</CharacterDetailsName>
                            <CharacterDetailsFavoriteIcon
                                src={isFavorite ? '/heart-filled.svg' : '/heart-empty.svg'}
                                alt="Favorite icon"
                                onClick={handleFavoriteClick}
                            />
                        </CharacterDetailsNameContainer>
                        <CharacterDetailsDescription>{description}</CharacterDetailsDescription>
                    </CharacterDetailsWrapper2>
                </CharacterDetailsWrapper>
            </CharacterDetailsContainerCentered>
            <CharacterDetailsContainerRightCut />
        </CharacterDetailsContainer>
    );
}
