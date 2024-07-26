import { styled } from 'styled-components';

export const SearchBarContainer = styled.div`
    width: 100vw;
    height: 77px;
    padding: 12px 48px 12px 48px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const SearchBarInputContainer = styled.div`
    width: 100%;
    height: 27px;
    border-bottom: 1px solid #000000;
`;

export const SearchBarInputContainer2 = styled.div`
    width: 100%;
    height: 19px;
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const SearchBarInputMagnifyingGlassLogo = styled.img`
    width: 12px;
`;

export const SearchBarInputInput = styled.input`
    width: calc(100% - 24px); // 100% - 12px (magnifying glass width) - 12px (gap)
    border: none;
    background-color: transparent;
    font-family: 'Roboto Condensed', sans-serif;
    outline: none;
    color: #000000;
    font-size: 16px;

    ::placeholder {
        color: #aaaaaa;
    }
`;

export const SearchBarResults = styled.div`
    font-size: 12px;
`;
