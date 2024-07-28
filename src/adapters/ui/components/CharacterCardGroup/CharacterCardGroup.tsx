import { CharacterCardGroupContainer } from './CharacterCardGroup.styles';

interface CharacterCardGroupProps {
    children: React.ReactNode;
}

export function CharacterCardGroup({ children }: CharacterCardGroupProps) {
    return <CharacterCardGroupContainer>{children}</CharacterCardGroupContainer>;
}
