import { styled } from 'styled-components';

import { device } from '../../global-styles/breakpoints';

export const ComicGroupWrapper = styled.div`
    width: 100%;
    min-height: 369px;
    overflow-x: auto;
    position: relative;
    cursor: grab;

    &::-webkit-scrollbar {
        height: 4px;

        @media ${device.md} {
            display: none;
        }
    }

    &::-webkit-scrollbar-track {
        background: #d9d9d9;
    }

    &::-webkit-scrollbar-thumb {
        background: #ec1d24;
    }

    &::-webkit-scrollbar-button {
        display: none;
    }

    @media ${device.md} {
        padding-left: 48px;
    }

    @media ${device.sm} {
        padding-left: 16px;
    }
`;

export const ComicGroupContainer = styled.div`
    height: 100%;
    display: flex;
    gap: 16px;
`;
