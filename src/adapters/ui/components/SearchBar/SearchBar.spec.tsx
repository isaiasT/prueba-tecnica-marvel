import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { SearchBar } from './SearchBar';

import '@testing-library/jest-dom';

describe('SearchBar', () => {
    test('renders input and count', () => {
        const handleInput = vi.fn();
        render(<SearchBar count={5} handleInput={handleInput} />);

        expect(screen.getByPlaceholderText('SEARCH A CHARACTER...')).toBeInTheDocument();
        expect(screen.getByText('5 RESULTS')).toBeInTheDocument();
    });

    test('calls handleInput on input change', () => {
        const handleInput = vi.fn();
        render(<SearchBar count={0} handleInput={handleInput} />);

        const input = screen.getByPlaceholderText('SEARCH A CHARACTER...');

        fireEvent.change(input, { target: { value: 'test' } });

        expect(handleInput).toHaveBeenCalledWith('test');
    });
});
