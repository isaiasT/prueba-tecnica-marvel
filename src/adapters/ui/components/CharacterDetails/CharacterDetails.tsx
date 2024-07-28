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
    name: string;
    description: string;
    isFavorite: boolean;
    photoSrc: string;
}

function CharacterDetails({ name, description, isFavorite, photoSrc }: CharacterDetailsProps) {
    return (
        <CharacterDetailsContainer>
            <CharacterDetailsContainerCentered>
                <CharacterDetailsPhotoWrapper>
                    <CharacterDetailsPhoto src={photoSrc} alt={name} />
                </CharacterDetailsPhotoWrapper>
                <CharacterDetailsWrapper>
                    <CharacterDetailsWrapper2>
                        <CharacterDetailsNameContainer>
                            <CharacterDetailsName>{name}</CharacterDetailsName>
                            <CharacterDetailsFavoriteIcon
                                src={isFavorite ? '/heart-filled.svg' : '/heart-empty.svg'}
                                alt="Favorite icon"
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

export default CharacterDetails;
