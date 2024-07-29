import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { MainContainer } from './MainContainer';

import '@testing-library/jest-dom';

describe('MainContainer', () => {
    test('renders children correctly', () => {
        render(
            <MainContainer>
                <div>Test Child</div>
            </MainContainer>
        );
        const childElement = screen.getByText('Test Child');
        expect(childElement).toBeInTheDocument();
    });
});
