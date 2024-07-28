import { styled } from 'styled-components';

import { device } from '../../global-styles/breakpoints';

export const CharacterDetailsContainer = styled.div`
    width: 100vw;
    height: 320px;
    background-color: #000000;
    position: relative;
    border-top: 1px #333333 solid;
    display: flex;
    justify-content: center;

    @media ${device.md} {
        height: 278px;
    }

    @media ${device.sm} {
        height: 608px;
        border-top: none;
    }
`;

export const CharacterDetailsContainerRightCut = styled.div`
    position: absolute;
    border-color: transparent #ffffff transparent transparent;
    border-width: 25px 25px 0px 0px;
    bottom: -1px;
    right: -1px;
    z-index: 20;
    border-style: solid;
`;

export const CharacterDetailsContainerCentered = styled.div`
    width: 100%;
    height: 100%;
    max-width: 960px;
    display: flex;

    @media ${device.sm} {
        flex-direction: column;
    }
`;

export const CharacterDetailsPhotoWrapper = styled.div`
    width: 320px;
    min-width: 278px;
    height: 100%;
    position: relative;
    overflow: hidden;

    @media ${device.md} {
        width: 278px;
    }

    @media ${device.sm} {
        width: 100%;
        height: 398px;
    }
`;

export const CharacterDetailsPhoto = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
`;

export const CharacterDetailsWrapper = styled.div`
    height: 100%;
    max-width: 640px;
    display: flex;
    align-items: center;
    padding-left: 48px;
    flex-grow: 1;

    @media ${device.md} {
        padding-right: 48px;
    }

    @media ${device.sm} {
        height: 210px;
    }
`;

export const CharacterDetailsWrapper2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const CharacterDetailsNameContainer = styled.div`
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: space-between;
`;

export const CharacterDetailsName = styled.div`
    height: 100%;
    text-transform: uppercase;
    color: #ffffff;
    display: flex;
    align-items: center;
    font-size: 40px;
    font-weight: 700;

    @media ${device.md} {
        font-size: 32px;
    }
`;

export const CharacterDetailsFavoriteIcon = styled.img`
    width: 24px;
    cursor: pointer;
`;

export const CharacterDetailsDescription = styled.div`
    color: #ffffff;
    font-size: 16px;
`;
