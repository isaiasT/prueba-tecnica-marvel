import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';

import { createHttpClient, HttpClient } from '../../adapters/http/httpClient';
import { CharacterCard } from '../../adapters/ui/components/CharacterCard/CharacterCard';
import { CharacterCardGroup } from '../../adapters/ui/components/CharacterCardGroup/CharacterCardGroup';
import { SearchBar } from '../../adapters/ui/components/SearchBar/SearchBar';
import { getAllCharactersUsecase } from '../../application/usecases/getAllCharacters/getAllCharacters.usecase';
import { createCharacterRepository } from '../../infrastructure/repositories/character/character.repository';
import { CharactersPageContainer } from './Page.styles';
import { Character } from '../../domain/entities/Character';
import { CharacterRepositoryGetAllResponse } from '../../domain/ports/character.repository.port';
import { LoadingSpinner } from '../../adapters/ui/components/LoadingSpinner/LoadingSpinner';
import { getAllCharactersFilteredByNameUsecase } from '../../application/usecases/getAllCharactersFilteredByName/getAllCharactersFilteredByName.usecase';

const httpClient: HttpClient = createHttpClient();
const characterRepository = createCharacterRepository(httpClient);
const getAllCharacters = getAllCharactersUsecase(characterRepository);
const getAllCharactersFilteredByName = getAllCharactersFilteredByNameUsecase(characterRepository);

function CharactersPage() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [count, setCount] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = async (filter: string) => {
        setCharacters([]);
        setCount(0);
        setIsLoading(true);

        try {
            let result: CharacterRepositoryGetAllResponse;

            if (filter === '') {
                result = await getAllCharacters();
            } else {
                result = await getAllCharactersFilteredByName(filter);
            }

            setCharacters(result.data.results);
            setCount(result.data.count);
        } catch (err) {
            setError('Error getting characters');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        void fetchData('');
    }, []);

    const debouncedHandleInput = _.debounce((inputValue: string) => {
        void fetchData(inputValue);
    }, 300);

    const debouncedHandleInputRef = useRef(debouncedHandleInput);

    return (
        <CharactersPageContainer>
            {error && <div>{error}</div>}
            <SearchBar count={count} handleInput={debouncedHandleInputRef.current} />
            <CharacterCardGroup>
                {isLoading && <LoadingSpinner />}
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </CharacterCardGroup>
        </CharactersPageContainer>
    );
}

export default CharactersPage;
