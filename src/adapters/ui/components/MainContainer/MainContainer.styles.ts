import { styled } from 'styled-components';

import { device } from '../styles/breakpoints';

export const MainContainerContainer = styled.div`
    width: 100vw;
    padding: 48px 0px 48px 0px;
    box-sizing: border-box;

    @media ${device.sm} {
        padding: 24px 0px 24px 0px;
    }
`;
