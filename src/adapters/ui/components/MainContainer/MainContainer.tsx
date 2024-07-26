import { MainContainerContainer } from './MainContainer.styles';

interface LayoutProps {
    children: React.ReactNode;
}

function MainContainer({ children }: LayoutProps) {
    return <MainContainerContainer>{children}</MainContainerContainer>;
}

export default MainContainer;
