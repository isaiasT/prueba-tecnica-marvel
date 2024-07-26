import React from 'react';

import Navigation from '../adapters/ui/components/Navigation/Navigation';
import './Layout.css';

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <React.StrictMode>
            <Navigation />
            {children}
        </React.StrictMode>
    );
}

export { Layout };
