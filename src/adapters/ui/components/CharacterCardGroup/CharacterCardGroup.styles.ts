import { styled } from 'styled-components';

export const CharacterCardGroupContainer = styled.div`
    width: 100%;
    height: 640px;
    padding: 0px 48px 0px 48px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
    align-items: start;
`;
