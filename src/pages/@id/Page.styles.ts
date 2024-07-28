import { styled } from 'styled-components';

import { device } from '../../adapters/ui/global-styles/breakpoints';

export const CharacterDetailsPageComicsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 24px;
`;

export const CharacterDetailsPageComicsContainerCentered = styled.div`
    width: 100%;
    height: 100%;
    max-width: 960px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 40px 0px 48px 0px;

    @media ${device.md} {
        max-width: 100vw;
    }
`;

export const CharacterDetailsPageComicsTitle = styled.div`
    font-size: 32px;
    height: 38px;
    font-weight: 700;
    line-height: 38px;

    @media ${device.md} {
        padding-left: 48px;
    }

    @media ${device.sm} {
        padding-left: 16px;
    }
`;
