import { Comic } from '../../../../domain/entities/Comic';
import {
    ComicContainer,
    ComicInfoContainer,
    ComicName,
    ComicPhoto,
    ComicPhotoWrapper,
    ComicYear,
} from './Comic.styles';

interface ComicProps {
    comic: Comic;
}

export function ComicComponent({ comic }: ComicProps) {
    const { thumbnail, title, dates } = comic;
    const year = new Date(dates[0].date).getFullYear();

    return (
        <ComicContainer>
            <ComicPhotoWrapper>
                <ComicPhoto src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
            </ComicPhotoWrapper>
            <ComicInfoContainer>
                <ComicName>{title}</ComicName>
                <ComicYear>{year}</ComicYear>
            </ComicInfoContainer>
        </ComicContainer>
    );
}
