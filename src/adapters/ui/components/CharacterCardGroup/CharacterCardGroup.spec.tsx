import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { CharacterCardGroup } from './CharacterCardGroup';

describe('CharacterCardGroup', () => {
    test('renders children correctly', () => {
        const childContent = <div>Test Child</div>;

        render(<CharacterCardGroup>{childContent}</CharacterCardGroup>);

        expect(screen.getByText('Test Child')).toBeInTheDocument();
    });

    test('renders multiple children correctly', () => {
        const firstChild = <div>First Child</div>;
        const secondChild = <div>Second Child</div>;

        render(
            <CharacterCardGroup>
                {firstChild}
                {secondChild}
            </CharacterCardGroup>
        );

        expect(screen.getByText('First Child')).toBeInTheDocument();
        expect(screen.getByText('Second Child')).toBeInTheDocument();
    });
});
