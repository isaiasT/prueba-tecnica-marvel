import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { ComicComponent } from './Comic';
import { Comic } from '../../../../domain/entities/Comic';

const mockComic: Comic = {
    id: 1,
    title: 'Test Comic',
    thumbnail: { path: '/test-path', extension: 'jpg' },
    dates: [{ type: 'onsaleDate', date: new Date('2022-01-01T00:00:00Z') }],
};

describe('ComicComponent', () => {
    test('renders comic details correctly', () => {
        render(<ComicComponent comic={mockComic} />);

        expect(screen.getByText(mockComic.title)).toBeInTheDocument();

        expect(screen.getByText('2022')).toBeInTheDocument();

        expect(screen.getByAltText(mockComic.title)).toHaveAttribute(
            'src',
            `${mockComic.thumbnail.path}.${mockComic.thumbnail.extension}`
        );
    });
});
