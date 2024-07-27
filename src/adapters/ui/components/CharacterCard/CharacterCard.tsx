import { useState } from 'react';

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

interface CharacterCardProps {
    name: string;
    isFavorite: boolean;
    imageSrc: string;
}

function CharacterCard({ name, isFavorite, imageSrc }: CharacterCardProps) {
    const [characterIsFavorite, setCharacterIsFavorite] = useState(isFavorite);

    const handleFavoriteClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setCharacterIsFavorite(!characterIsFavorite);
    };

    return (
        <CharacterCardContainer href="/1">
            <CharacterCardPhotoWrapper>
                <CharacterCardPhoto src={imageSrc} />
            </CharacterCardPhotoWrapper>
            <CharacterCardInfo>
                <CharacterCardInfoName>{name}</CharacterCardInfoName>
                <CharacterCardInfoFavoriteWrapper onClick={handleFavoriteClick}>
                    {characterIsFavorite ? <CharacterCardInfoFavorite /> : <CharacterCardInfoNotFavorite />}
                </CharacterCardInfoFavoriteWrapper>
            </CharacterCardInfo>
            <CharacterCardBottomRightCut />
        </CharacterCardContainer>
    );
}

export default CharacterCard;
