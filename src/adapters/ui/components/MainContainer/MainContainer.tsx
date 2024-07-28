import { MainContainerContainer } from './MainContainer.styles';

interface LayoutProps {
    children: React.ReactNode;
}

export function MainContainer({ children }: LayoutProps) {
    return <MainContainerContainer>{children}</MainContainerContainer>;
}
