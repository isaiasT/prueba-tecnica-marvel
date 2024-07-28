import CharacterDetails from '../../adapters/ui/components/CharacterDetails/CharacterDetails';
import Comic from '../../adapters/ui/components/Comic/Comic';
import ComicGroup from '../../adapters/ui/components/ComicGroup/ComicGroup';
import {
    CharacterDetailsPageComicsContainer,
    CharacterDetailsPageComicsContainerCentered,
    CharacterDetailsPageComicsTitle,
} from './Page.styles';

function CharacterDetailsPage() {
    return (
        <>
            <CharacterDetails
                name="MAGNETO"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat rhoncus odio. Maecenas malesuada enim diam, cursus congue massa pharetra quis. In hac habitasse platea dictumst."
                isFavorite={false}
                photoSrc="/magneto.png"
            />
            <CharacterDetailsPageComicsContainer>
                <CharacterDetailsPageComicsContainerCentered>
                    <CharacterDetailsPageComicsTitle>COMICS</CharacterDetailsPageComicsTitle>
                    <ComicGroup>
                        <Comic photoSrc="/comic.png" name="Who is...? Adam Warlock Infinity Comic #1" year="1967" />
                        <Comic photoSrc="/comic.png" name="Who is...? Adam Warlock Infinity Comic #1" year="1967" />
                        <Comic photoSrc="/comic.png" name="Who is...? Adam Warlock Infinity Comic #1" year="1967" />
                        <Comic photoSrc="/comic.png" name="Who is...? Adam Warlock Infinity Comic #1" year="1967" />
                        <Comic photoSrc="/comic.png" name="Who is...? Adam Warlock Infinity Comic #1" year="1967" />
                        <Comic photoSrc="/comic.png" name="Who is...? Adam Warlock Infinity Comic #1" year="1967" />
                        <Comic photoSrc="/comic.png" name="Who is...? Adam Warlock Infinity Comic #1" year="1967" />
                    </ComicGroup>
                </CharacterDetailsPageComicsContainerCentered>
            </CharacterDetailsPageComicsContainer>
        </>
    );
}

export default CharacterDetailsPage;
