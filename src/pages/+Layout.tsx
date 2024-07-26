import React from 'react';

import Navigation from '../adapters/ui/components/Navigation/Navigation';
import './Layout.css';
import MainContainer from '../adapters/ui/components/MainContainer/MainContainer';

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <React.StrictMode>
            <Navigation />
            <MainContainer>{children}</MainContainer>
        </React.StrictMode>
    );
}

export { Layout };
