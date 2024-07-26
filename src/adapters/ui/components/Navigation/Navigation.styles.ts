import { styled } from 'styled-components';

export const NavigationContainer = styled.div`
    width: 100vw;
    height: 84px;
    padding: 16px 48px 16px 48px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    background-color: #000000;
    color: #ffffff;
`;

export const NavigationLogo = styled.img`
    width: 130px;
`;

export const NavigationFavorites = styled.a`
    width: auto;
    height: 37.68px;
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    text-decoration: none;
    color: #ffffff;
`;

export const NavigationFavoritesLogo = styled.img`
    width: 24px;
`;
