import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Paper, Typography } from '@material-ui/core';
import VirtualizedMUIGrid from '..';

describe('Virtualized MUI Grid Component Render Tests with 4 columns', () => {
  let theme;

  const TestAgainst = ({ color, shape, spacing }) => {
    const rowHeights = new Array(1000).fill(true).map(() => 25 + Math.round(Math.random() * 50));

    const Cell = (rowData, i) => (
      <Paper key={`${i}_Grid`}>
        <Typography variant="button">item cell {i}</Typography>
      </Paper>
    );
    return (
      <VirtualizedMUIGrid
        columns={4}
        containerHeight="55vh"
        data={rowHeights}
        preRenderRowCount={5}
        renderItem={Cell}
        rowHeight={75}
        spacing={2}
      />
    );
  };

  test('renders', () => {
    const { queryByTestId } = render(<TestAgainst />);

    expect(queryByTestId('virtualized-grid-component')).toBeInTheDocument();
  });
});

describe('Virtualized MUI Grid Rendering a list of elements', () => {
  let theme;

  const TestAgainst = ({ color, shape, spacing }) => {
    const rowHeights = new Array(1000).fill(true).map(() => 25 + Math.round(Math.random() * 50));

    const Cell = (rowData, i) => (
      <Paper key={`${i}_Grid`}>
        <Typography variant="button">item cell {i}</Typography>
      </Paper>
    );
    return (
      <VirtualizedMUIGrid
        containerHeight="55vh"
        data={rowHeights}
        preRenderRowCount={5}
        renderItem={Cell}
        rowHeight={75}
        spacing={2}
        variant="List"
      />
    );
  };

  test('renders', () => {
    const { queryByTestId } = render(<TestAgainst />);

    expect(queryByTestId('virtualized-list-component')).toBeInTheDocument();
  });
});
