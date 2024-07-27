import { styled } from 'styled-components';

import { device } from '../../adapters/ui/components/styles/breakpoints';

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
