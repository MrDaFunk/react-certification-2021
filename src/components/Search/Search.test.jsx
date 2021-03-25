import React from 'react';

import { render, fireEvent, screen, waitFor } from '@testing-library/react';

import Search from './Search.component';
import App from '../App';

describe('Search Component Testing', () => {
  it('selects an element using the placeholder', () => {
    const { getByPlaceholderText } = render(<Search />);

    expect(getByPlaceholderText('Buscar').tagName).toBe('INPUT');
  });

  it("searching a query from the element's text and empty field validating loading wheel and results got it", () => {
    const { getByPlaceholderText } = render(<App />);

    const node = getByPlaceholderText('Buscar');

    fireEvent.keyDown(node, { key: 'Enter', code: 13, charCode: 13 });

    waitFor(
      () => {
        expect(screen.findByRole('loading')).not.toBeInDocument();

        fireEvent.keyDown(node, { key: 'a', keyCode: 65 });
        fireEvent.keyDown(node, { key: 'Enter', code: 13, charCode: 13 });

        waitFor(
          () => {
            expect(screen.findByRole('loading')).toBeInDocument();
            waitFor(
              () => {
                expect(screen.findByRole('loading')).not.toBeInDocument();
                expect(
                  screen.findByText('No se encontraron resultados')
                ).not.toBeInDocument();

                fireEvent.keyDown(node, { key: 'h', keyCode: 72 });
                fireEvent.keyDown(node, { key: 't', keyCode: 84 });
                fireEvent.keyDown(node, { key: 'y', keyCode: 89 });
                fireEvent.keyDown(node, { key: 'd', keyCode: 68 });
                fireEvent.keyDown(node, { key: 'Enter', code: 13, charCode: 13 });

                waitFor(
                  () =>
                    expect(
                      screen.findByText('No se encontraron resultados')
                    ).toBeInDocument(),
                  { timeout: 1000 }
                );
              },
              { timeout: 1000 }
            );
          },
          { timeout: 200 }
        );
      },
      { timeout: 200 }
    );
  });
});
