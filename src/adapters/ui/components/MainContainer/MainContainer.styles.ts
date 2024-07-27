import { styled } from 'styled-components';

import { device } from '../styles/breakpoints';

export const MainContainerContainer = styled.div`
    width: 100%;
    padding: 48px 0px 48px 0px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media ${device.sm} {
        padding: 24px 0px 24px 0px;
    }
`;
