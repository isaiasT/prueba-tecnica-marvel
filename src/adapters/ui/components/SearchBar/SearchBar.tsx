import {
    SearchBarContainer,
    SearchBarInputContainer,
    SearchBarInputContainer2,
    SearchBarInputInput,
    SearchBarInputMagnifyingGlassLogo,
    SearchBarResults,
} from './SearchBar.styles';

interface SearchBarProps {
    count: number;
    handleInput: (inputValue: string) => void;
}

export function SearchBar({ count, handleInput }: SearchBarProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleInput(event.target.value);
    };

    return (
        <SearchBarContainer>
            <SearchBarInputContainer>
                <SearchBarInputContainer2>
                    <SearchBarInputMagnifyingGlassLogo src="/magnifying-glass.svg" alt="Magnifying glass icon" />
                    <SearchBarInputInput
                        spellCheck={false}
                        type="text"
                        placeholder="SEARCH A CHARACTER..."
                        onChange={handleChange}
                    />
                </SearchBarInputContainer2>
            </SearchBarInputContainer>
            <SearchBarResults>
                {count} RESULT{count !== 1 ? 'S' : ''}
            </SearchBarResults>
        </SearchBarContainer>
    );
}
