import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
    it('renders a heading', () => {
        const { container } = render(<Home />);


        expect(container).toMatchSnapshot()
    });
});