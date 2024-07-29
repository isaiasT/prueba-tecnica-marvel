import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { LoadingSpinner } from './LoadingSpinner';
import '@testing-library/jest-dom';

describe('LoadingSpinner', () => {
    test('renders correctly', () => {
        render(<LoadingSpinner />);
        const spinner = screen.getByAltText('Loading spinner');
        expect(spinner).toBeInTheDocument();
        expect(spinner).toHaveAttribute('src', 'spinner.svg');
    });
});
