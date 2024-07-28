import { styled } from 'styled-components';

import { device } from '../../adapters/ui/global-styles/breakpoints';

export const CharactersPageContainer = styled.div`
    padding: 48px 0px 48px 0px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media ${device.sm} {
        padding: 24px 0px 24px 0px;
    }
`;

export const CharactersPageLoading = styled.img`
    padding: 48px 0px 48px 0px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media ${device.sm} {
        padding: 24px 0px 24px 0px;
    }
`;
