import { useEffect, useState } from 'react';

import { createHttpClient, HttpClient } from '../../adapters/http/httpClient';
import { CharacterCard } from '../../adapters/ui/components/CharacterCard/CharacterCard';
import { CharacterCardGroup } from '../../adapters/ui/components/CharacterCardGroup/CharacterCardGroup';
import { SearchBar } from '../../adapters/ui/components/SearchBar/SearchBar';
import { getAllCharactersUsecase } from '../../application/usecases/getAllCharacters/getAllCharacters.usecase';
import { createCharacterRepository } from '../../infrastructure/repositories/character.repository';
import { CharactersPageContainer } from './Page.styles';
import { Character } from '../../domain/entities/Character';
import { CharacterRepositoryGetAllResponse } from '../../domain/ports/character.repository.port';
import { LoadingSpinner } from '../../adapters/ui/components/LoadingSpinner/LoadingSpinner';

const httpClient: HttpClient = createHttpClient();
const characterRepository = createCharacterRepository(httpClient);
const getAllCharacters = getAllCharactersUsecase(characterRepository);

function CharactersPage() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [count, setCount] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const result: CharacterRepositoryGetAllResponse = await getAllCharacters();

                setCharacters(result.data.results);
                setCount(result.data.count);
                setIsLoading(false);
            } catch (err) {
                setError('Error getting characters');
            }
        };

        void fetchData();
    }, []);

    return (
        <CharactersPageContainer>
            {error && <div>{error}</div>}
            <SearchBar count={count} />
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
