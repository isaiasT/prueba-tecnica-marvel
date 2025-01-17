import { styled } from 'styled-components';

export const ComicContainer = styled.div`
    width: 179px;
    min-height: 341px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const ComicPhotoWrapper = styled.div`
    width: 179px;
    height: 269px;
`;

export const ComicPhoto = styled.img`
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
    user-select: none;
`;

export const ComicInfoContainer = styled.div`
    min-height: 60px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    user-select: none;
`;

export const ComicName = styled.div`
    font-size: 16px;
    font-weight: 500;
`;

export const ComicYear = styled.div`
    font-size: 12px;
`;
