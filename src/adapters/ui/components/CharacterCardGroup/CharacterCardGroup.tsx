import { CharacterCardGroupContainer } from './CharacterCardGroup.styles';

interface CharacterCardGroupProps {
    children: React.ReactNode;
}

function CharacterCardGroup({ children }: CharacterCardGroupProps) {
    return <CharacterCardGroupContainer>{children}</CharacterCardGroupContainer>;
}

export default CharacterCardGroup;
