import { ComicGroupContainer, ComicGroupWrapper } from './ComicGroup.styles';

interface ComicGroupProps {
    children: React.ReactNode;
}

function ComicGroup({ children }: ComicGroupProps) {
    return (
        <ComicGroupWrapper>
            <ComicGroupContainer>{children}</ComicGroupContainer>
        </ComicGroupWrapper>
    );
}

export default ComicGroup;
