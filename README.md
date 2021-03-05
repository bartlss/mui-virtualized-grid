Table of Contents
* [Features](#features)
  * [Props](#props)

# Features
Custom Material UI Virtualized Grid increase perfomance when rendering a large amounts of data. Designed to be mobile friendly.

## Props

Property              | required/optional | type                                                | default | Description
---                   | ---               | ---                                                 | ---     | --- 
data                  | required          | any[]                                               | --      | An array of data to be appear in the grid/list
renderItem            | required          | (rowData: any, rowIndex: number) => ReactElement    | --      | `Function` that takes the current row and row index and returns the component it should display
rowHeight             | required          | number                                              | --      | Defines the height of each row within the grid/list
columns               | optional          | 1, 2, 3, 4, 6, 12                                   | 1       | Defines the total number of columns. Passing anything greater than 1 will assume Grid and not ListItem
containerHeight       | optional          | number / string                                     | 300     | Defines the height of the wrapping Grid container
listItemProps         | optional          | ListItemTypeMap<{button?: false undefined;}, 'li'>  | {}      | Props to pass to the list item component if `variant` is `List`
localizationMessages  | optional          | { nothingToDisplay: string; }                       | { nothingToDisplay: "Nothiing to Display" } | Defined translations for builtin messaging
preRenderRowCount     | optional          | number                                              | 3       | Defines the number of rows not in view to render
spacing               | optional          | GridSpacing                                         | 0       | When variant is set to grid, this defines the spacing around the containers items
variant               | optional          | `'Grid' or 'List'`                                  | 'Grid'  | Defines which component will be used for the grid.   



## Virtualized Grid with 4 columns

![Virtualized Grid Demo](https://api.brickhousefiberarts.com/cdn/VirtualGrid.gif)

```jsx
import { Grid, Paper, Typography, useTheme } from '@material-ui/core';
const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));

const { spacing } = useTheme();

const Cell = (rowData, i) => (
    <Paper key={`${i}_Grid`}>
        <Typography variant="button">item cell {i}</Typography>
    </Paper>
);

<Grid container spacing={2}>
    <Grid item xs={12}>
        <Typography variant="h4">Displaying 1000 products divided into 4 columns</Typography>
    </Grid>
    <Grid item xs={12}>
        <VirtualizedMUIGrid
            columns={4}
            containerHeight="55vh"
            data={rowHeights}
            preRenderRowCount={5}
            renderItem={Cell}
            rowHeight={75}
            spacing={2}
        />
    </Grid>
</Grid>
```



## Virtualized List using the List and ListItem Components

![Virtualized List Demo](https://api.brickhousefiberarts.com/cdn/VirtualList.gif)

```jsx
import { Grid, Paper, Typography, useTheme } from '@material-ui/core';
const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));

const { spacing } = useTheme();


const ListCell = (rowData, i) => (
    <Paper key={`${i}_List`}>
        <Typography variant="button">item cell {i}</Typography>
    </Paper>
);

<Grid container spacing={2}>
    <Grid item xs={12}>
        <Typography variant="h4">Displaying a list of 1000 products. 1 per row.</Typography>
    </Grid>
    <Grid item xs={12}>
        <VirtualizedMUIGrid
            containerHeight="55vh"
            data={rowHeights}
            preRenderRowCount={5}
            renderItem={ListCell}
            rowHeight={75}
            spacing={2}
            variant="List"
        />
    </Grid>
</Grid>
```

