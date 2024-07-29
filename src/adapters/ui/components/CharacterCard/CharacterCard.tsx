import {
    CharacterCardBottomRightCut,
    CharacterCardContainer,
    CharacterCardInfo,
    CharacterCardInfoFavorite,
    CharacterCardInfoFavoriteWrapper,
    CharacterCardInfoName,
    CharacterCardInfoNotFavorite,
    CharacterCardPhoto,
    CharacterCardPhotoWrapper,
} from './CharacterCard.styles';
import { useFavoriteCharacters } from '../../../../infrastructure/contexts/FavoriteCharacters/FavoriteCharactersContext';
import { Character } from '../../../../domain/entities/Character';

interface CharacterCardProps {
    character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
    const { addFavorite, removeFavorite, favorites } = useFavoriteCharacters();
    const { id, name, thumbnail } = character;
    const isFavorite = favorites.some((favorite) => favorite.id === id);

    const handleFavoriteClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        event.preventDefault();

        isFavorite ? removeFavorite(id) : addFavorite(character);
    };

    return (
        <CharacterCardContainer href={`/${id}`}>
            <CharacterCardPhotoWrapper>
                <CharacterCardPhoto
                    src={`${thumbnail.path.replace('http:', 'https:')}.${thumbnail.extension}`}
                    alt={name}
                />
            </CharacterCardPhotoWrapper>
            <CharacterCardInfo>
                <CharacterCardInfoName>{name}</CharacterCardInfoName>
                <CharacterCardInfoFavoriteWrapper onClick={handleFavoriteClick} role="button">
                    {isFavorite ? <CharacterCardInfoFavorite /> : <CharacterCardInfoNotFavorite />}
                </CharacterCardInfoFavoriteWrapper>
            </CharacterCardInfo>
            <CharacterCardBottomRightCut />
        </CharacterCardContainer>
    );
}
