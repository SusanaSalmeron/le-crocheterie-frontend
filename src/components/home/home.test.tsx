import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './home';

describe('<Home />', () => {
  test('it should mount', () => {
    render(<Home />);

    const home = screen.getByTestId('home');
    expect(home).toBeInTheDocument();
    const carousel = screen.getByTestId('Carousel')
    expect(carousel).toBeInTheDocument()

  });
});