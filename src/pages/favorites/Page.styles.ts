import { styled } from 'styled-components';

import { device } from '../../adapters/ui/styles/breakpoints';

export const FavoritesPageTitleContainer = styled.div`
    padding: 48px 0px 48px 0px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media ${device.sm} {
        padding: 24px 0px 24px 0px;
    }
`;

export const FavoritesPageTitle = styled.div`
    font-size: 32px;
    height: 38px;
    padding: 0px 48px 0px 48px;
    font-weight: 700;
    line-height: 38px;

    @media ${device.sm} {
        padding: 0px 16px 0px 16px;
    }
`;
