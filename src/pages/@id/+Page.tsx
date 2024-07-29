import { usePageContext } from 'vike-react/usePageContext';
import { useEffect, useRef, useState } from 'react';

import { CharacterDetails } from '../../adapters/ui/components/CharacterDetails/CharacterDetails';
import { ComicComponent } from '../../adapters/ui/components/Comic/Comic';
import { ComicGroup } from '../../adapters/ui/components/ComicGroup/ComicGroup';
import {
    CharacterDetailsPageComicsContainer,
    CharacterDetailsPageComicsContainerCentered,
    CharacterDetailsPageComicsTitle,
} from './Page.styles';
import { Character } from '../../domain/entities/Character';
import { CharacterRepositoryGetByIdResponse } from '../../domain/ports/character.repository.port';
import { createHttpClient, HttpClient } from '../../adapters/http/httpClient';
import { createCharacterRepository } from '../../infrastructure/repositories/character/character.repository';
import { getCharacterByIdUsecase } from '../../application/usecases/getCharacterById/getCharacterById.usecase';
import { LoadingSpinner } from '../../adapters/ui/components/LoadingSpinner/LoadingSpinner';
import { Comic } from '../../domain/entities/Comic';
import { createComicRepository } from '../../infrastructure/repositories/comic/comic.repository';
import { getAllComicsByCharacterIdUsecase } from '../../application/usecases/getAllComicsByCharacterId/getAllComicsByCharacterId.usecase';
import { ComicRepositoryGetAllByCharacterIdResponse } from '../../domain/ports/comic.repository.port';

const httpClient: HttpClient = createHttpClient();
const characterRepository = createCharacterRepository(httpClient);
const comicRepository = createComicRepository(httpClient);
const getCharacterById = getCharacterByIdUsecase(characterRepository);
const getAllComicsByCharacterId = getAllComicsByCharacterIdUsecase(comicRepository);

function CharacterDetailsPage() {
    const pageContext = usePageContext();
    const id = useRef(pageContext.routeParams.id);
    const [character, setCharacter] = useState<Character>();
    const [comics, setComics] = useState<Comic[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoading2, setIsLoading2] = useState<boolean>(false);

    useEffect(() => {
        const fetchCharacterData = async () => {
            setIsLoading(true);
            try {
                const result: CharacterRepositoryGetByIdResponse = await getCharacterById(Number(id.current));

                setCharacter(result.data.results[0]);
                setIsLoading(false);
            } catch (err) {
                setError('Error getting characters');
            }
        };

        const fetchComicsData = async () => {
            setIsLoading2(true);
            try {
                const result: ComicRepositoryGetAllByCharacterIdResponse = await getAllComicsByCharacterId(
                    Number(id.current)
                );

                setComics(result.data.results);
                setIsLoading2(false);
            } catch (err) {
                setError('Error getting characters');
            }
        };

        void fetchCharacterData();
        void fetchComicsData();
    }, []);

    return (
        <>
            {error && <div>{error}</div>}
            {isLoading && <LoadingSpinner />}
            {character && <CharacterDetails character={character} />}
            <CharacterDetailsPageComicsContainer>
                <CharacterDetailsPageComicsContainerCentered>
                    <CharacterDetailsPageComicsTitle>COMICS</CharacterDetailsPageComicsTitle>
                    {isLoading2 && <LoadingSpinner />}
                    <ComicGroup>
                        {comics.map((comic) => (
                            <ComicComponent comic={comic} key={comic.id} />
                        ))}
                    </ComicGroup>
                </CharacterDetailsPageComicsContainerCentered>
            </CharacterDetailsPageComicsContainer>
        </>
    );
}

export default CharacterDetailsPage;
