import CharacterDetails from '../../adapters/ui/components/CharacterDetails/CharacterDetails';
import { CharacterDetailsPageComicsContainer, CharacterDetailsPageComicsTitle } from './Page.styles';

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
                <CharacterDetailsPageComicsTitle>COMICS</CharacterDetailsPageComicsTitle>
            </CharacterDetailsPageComicsContainer>
        </>
    );
}

export default CharacterDetailsPage;
