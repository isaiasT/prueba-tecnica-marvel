import { styled } from 'styled-components';

import { device } from '../styles/breakpoints';

export const CharacterCardGroupContainer = styled.div`
    width: 100%;
    height: 640px;
    padding: 0px 48px 0px 48px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-auto-rows: 246px;
    gap: 16px;
    align-items: start;

    @media ${device.sm} {
        padding: 0px 16px 0px 16px;
    }
`;
