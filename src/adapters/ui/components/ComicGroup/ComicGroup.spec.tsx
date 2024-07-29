import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { ComicGroup } from './ComicGroup';

describe('ComicGroup', () => {
    test('renders children correctly', () => {
        render(
            <ComicGroup>
                <div>Child 1</div>
                <div>Child 2</div>
            </ComicGroup>
        );

        expect(screen.getByText('Child 1')).toBeInTheDocument();
        expect(screen.getByText('Child 2')).toBeInTheDocument();
    });

    test('handles dragging correctly', () => {
        render(
            <ComicGroup>
                <div>Comic 1</div>
                <div>Comic 2</div>
            </ComicGroup>
        );

        const container = screen.getByTestId('comic-group-wrapper');

        const mockMouseDownEvent = new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true,
            pageX: 100,
        } as MouseEventInit);
        const mockMouseMoveEvent = new MouseEvent('mousemove', {
            bubbles: true,
            cancelable: true,
            pageX: 150,
        } as MouseEventInit);
        const mockMouseUpEvent = new MouseEvent('mouseup', { bubbles: true, cancelable: true });

        fireEvent(container, mockMouseDownEvent);

        expect(container.style.cursor).toBe('grabbing');

        fireEvent(container, mockMouseMoveEvent);
        fireEvent(container, mockMouseUpEvent);

        expect(container.style.cursor).toBe('grab');
    });
});
