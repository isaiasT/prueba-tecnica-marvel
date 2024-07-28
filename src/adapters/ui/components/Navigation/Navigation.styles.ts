import { styled } from 'styled-components';

import { device } from '../../global-styles/breakpoints';

export const NavigationContainer = styled.div`
    width: 100vw;
    height: 84px;
    padding: 16px 48px 16px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000000;
    color: #ffffff;

    @media ${device.sm} {
        padding: 16px;
    }
`;

export const NavigationLogoWrapper = styled.a`
    height: 100%;
    display: flex;
    align-items: center;
`;

export const NavigationLogo = styled.img`
    width: 130px;
`;

export const NavigationFavorites = styled.a`
    width: auto;
    height: 38px;
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    text-decoration: none;
    color: #ffffff;
`;

export const NavigationFavoritesIcon = styled.img`
    width: 24px;
`;
