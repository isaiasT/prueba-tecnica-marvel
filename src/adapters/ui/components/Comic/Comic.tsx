import {
    ComicContainer,
    ComicInfoContainer,
    ComicName,
    ComicPhoto,
    ComicPhotoWrapper,
    ComicYear,
} from './Comic.styles';

interface ComicProps {
    photoSrc: string;
    name: string;
    year: string;
}

function Comic({ photoSrc, name, year }: ComicProps) {
    return (
        <ComicContainer>
            <ComicPhotoWrapper>
                <ComicPhoto src={photoSrc} alt={name} />
            </ComicPhotoWrapper>
            <ComicInfoContainer>
                <ComicName>{name}</ComicName>
                <ComicYear>{year}</ComicYear>
            </ComicInfoContainer>
        </ComicContainer>
    );
}

export default Comic;
