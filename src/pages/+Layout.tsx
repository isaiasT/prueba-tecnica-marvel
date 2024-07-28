import React from 'react';

import { Navigation } from '../adapters/ui/components/Navigation/Navigation';
import { MainContainer } from '../adapters/ui/components/MainContainer/MainContainer';
import { FavoriteCharactersProvider } from '../infrastructure/contexts/FavoriteCharacters/FavoriteCharactersContextProvider';

import './Layout.css';

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <React.StrictMode>
            <FavoriteCharactersProvider>
                <Navigation />
                <MainContainer>{children}</MainContainer>
            </FavoriteCharactersProvider>
        </React.StrictMode>
    );
}

export { Layout };
