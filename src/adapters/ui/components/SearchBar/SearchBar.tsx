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
}

export function SearchBar({ count }: SearchBarProps) {
    return (
        <SearchBarContainer>
            <SearchBarInputContainer>
                <SearchBarInputContainer2>
                    <SearchBarInputMagnifyingGlassLogo src="/magnifying-glass.svg" alt="Magnifying glass icon" />
                    <SearchBarInputInput type="text" placeholder="SEARCH A CHARACTER..." />
                </SearchBarInputContainer2>
            </SearchBarInputContainer>
            <SearchBarResults>
                {count} RESULT{count !== 1 ? 'S' : ''}
            </SearchBarResults>
        </SearchBarContainer>
    );
}
