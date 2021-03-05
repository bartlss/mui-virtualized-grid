### Features
Custom Material UI Virtualized Grid increase perfomance when rendering a large amounts of data. Designed to be mobile friendly.

#### Virtualized Grid with 4 columns

![Virtualized Grid Demo](https://api.brickhousefiberarts.com/cdn/VirtualGrid.gif)

```jsx
import { Grid, Paper, Typography, Icon, ButtonInput, useTheme } from 'lib';
const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));

const { spacing } = useTheme();

const Cell = (rowData, i) => (
    <Paper fullWidth fullHeight key={`${i}_Grid`}>
        <Typography variant="button">item cell {i}</Typography>
    </Paper>
);

<Grid container spacing={2}>
    <Grid item>
        <Typography variant="h4">Displaying 1000 products divided into 4 columns</Typography>
    </Grid>
    <Grid item>
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
#### Virtualized List using the List and ListItem Components

![Virtualized List Demo](https://api.brickhousefiberarts.com/cdn/VirtualList.gif)

```jsx
import { Grid, Paper, Typography, Icon, ButtonInput, useTheme } from 'lib';
const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));

const { spacing } = useTheme();


const ListCell = (rowData, i) => (
    <Paper fullWidth fullHeight key={`${i}_List`}>
        <Typography variant="button">item cell {i}</Typography>
    </Paper>
);

<Grid container spacing={2}>
    <Grid item>
        <Typography variant="h4">Displaying a list of 1000 products. 1 per row.</Typography>
    </Grid>
    <Grid item>
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
