export { Layout };

import React from 'react';
import './Layout.css';

import Navigation from '../adapters/ui/components/Navigation/Navigation';
import GlobalStyle from '../adapters/ui/styles/GlobalStyle';

function Layout({ children }) {
    return (
        <React.StrictMode>
            <GlobalStyle />
            <Navigation />
            {children}
        </React.StrictMode>
    );
}
