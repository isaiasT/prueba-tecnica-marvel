import { styled } from 'styled-components';

export const CharacterCardInfoFavorite = styled.img`
    content: url('/heart-filled.svg');
    width: 12px;
    transition: filter 0.4s ease;
`;

export const CharacterCardPhoto = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.4s ease;
`;

export const CharacterCardContainer = styled.a`
    max-width: 189px;
    height: 246px;
    background-color: black;
    position: relative;
    text-decoration: none;

    &:hover::after {
        height: calc(100% - 190px);
    }

    &::after {
        content: '';
        position: absolute;
        top: 190px;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: red;
        transition: height 0.4s ease;
    }

    &:hover ${CharacterCardInfoFavorite} {
        filter: brightness(0) invert(1);
    }

    &:hover ${CharacterCardPhoto} {
        transform: scale(1.1);
    }
`;

export const CharacterCardBottomRightCut = styled.div`
    position: absolute;
    border-color: transparent #ffffff transparent transparent;
    border-width: 14px 14px 0px 0px;
    bottom: -1px;
    right: -1px;
    z-index: 20;
    border-style: solid;
`;

export const CharacterCardPhotoWrapper = styled.div`
    height: 190px;
    width: 100%;
    position: relative;
    overflow: hidden;
`;

export const CharacterCardInfo = styled.div`
    height: 56px;
    display: flex;
    justify-content: space-between;
`;

export const CharacterCardInfoName = styled.div`
    height: 100%;
    text-transform: uppercase;
    color: #ffffff;
    z-index: 20;
    display: flex;
    align-items: center;
    padding-left: 16px;
    font-size: 14px;
`;

export const CharacterCardInfoFavoriteWrapper = styled.div`
    height: 100%;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
`;

export const CharacterCardInfoNotFavorite = styled.img`
    content: url('/heart-empty-character.svg');
    width: 12px;
    z-index: 20;
`;
