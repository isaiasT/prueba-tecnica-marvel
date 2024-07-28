import {
    SearchBarContainer,
    SearchBarInputContainer,
    SearchBarInputContainer2,
    SearchBarInputInput,
    SearchBarInputMagnifyingGlassLogo,
    SearchBarResults,
} from './SearchBar.styles';

function SearchBar() {
    return (
        <SearchBarContainer>
            <SearchBarInputContainer>
                <SearchBarInputContainer2>
                    <SearchBarInputMagnifyingGlassLogo src="/magnifying-glass.svg" alt="Magnifying glass icon" />
                    <SearchBarInputInput type="text" placeholder="SEARCH A CHARACTER..." />
                </SearchBarInputContainer2>
            </SearchBarInputContainer>
            <SearchBarResults>50 RESULTS</SearchBarResults>
        </SearchBarContainer>
    );
}

export default SearchBar;
