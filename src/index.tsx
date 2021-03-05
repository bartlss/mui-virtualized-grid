import {
    createStyles,
    Grid,
    GridSize,
    GridSpacing,
    List,
    ListItemProps,
    ListItemTypeMap,
    Theme,
    makeStyles,
    withStyles,
    Typography,
} from '@material-ui/core';
import { forwardRef, useEffect, useRef, useState } from 'react';
var React = require('react');
import { VirtualItem } from './subComponents/VirtualItem';

export interface VirtualizedMUIGridProps {
    classes?: Partial<Record<VirtualizedMUIGridClassKey, string>>;
    /** Passing anything greater than 1 will assume Grid and not ListItem */
    columns?: 1 | 2 | 3 | 4 | 6 | 12;
    containerHeight?: number | string;
    data: any[];
    listItemProps?: ListItemTypeMap<
        {
            button?: false | undefined;
        },
        'li'
    >;
    localizationMessages?: {
        nothingToDisplay: string;
    };
    preRenderRowCount?: number;
    /** component to render as item */
    renderItem: (rowData: any, rowIndex: number) => React.ReactElement;
    /** Defines the height of each row */
    rowHeight: number;
    spacing?: GridSpacing;
    /** Defines either a Grid with items or List with List Items. Defaults to Grid */
    variant?: 'Grid' | 'List';
}

/**
 * @visibleName VirtualizedMUIGrid
 * @author Sean Bartlett
 * @version 1.0.0
 *
 * This is a Virtualized Grid container that uses Material UI's Grid System to assist with column sizing with virtualization.
 *
 */

export type VirtualizedMUIGridClassKey = 'root' | 'scrollableContainerStyle' | 'scrollableListContainerStyle';

const VirtualizedMUIGridStyles = ({ palette }: Theme) => {
    return createStyles<
        VirtualizedMUIGridClassKey,
        VirtualizedMUIGridProps
    >({
        root: {
            backgroundColor: palette.background.paper,
            color: palette.text.primary,
            overflow: 'auto'
        },
        scrollableContainerStyle: {
            position: 'relative'
        },
        scrollableListContainerStyle: {
            position: 'relative',
            width: '100%'
        }
    });
};

export const VirtualizedMUIGrid = forwardRef<
    any,
    VirtualizedMUIGridProps & { component?: React.ElementType }
>(
    (
        {
            classes = {},
            columns = 1,
            localizationMessages = {
                nothingToDisplay: 'Nothing to Display'
            },
            containerHeight = 300,
            data,
            listItemProps,
            preRenderRowCount = 3,
            renderItem,
            rowHeight = 300,
            spacing = 0,
            variant = 'Grid',
        },
        ref
    ) => {
        const [rows, setRows] = useState<number[]>([]);

        const containerRef = useRef<HTMLDivElement>(null);

        let currentRenderCount = 0;

        useEffect(() => {
            const rowArray = [];
            const totalRows = Math.ceil(
                data.length / (variant === 'List' ? 1 : columns)
            );
            for (let a = 0; a < totalRows; a++) {
                rowArray.push(a);
            }
            setRows(rowArray);
        }, [columns, data]);

        const renderItemsForRow = (rowData: any, i: number) => {
            return variant == 'List' ? (
                renderItem(rowData, i)
            ) : (
                <Grid
                    item
                    key={i}
                    style={{
                        height: rowHeight,
                    }}
                    xs={(12 / columns) as GridSize}
                >
                    {renderItem(rowData, i)}
                </Grid>
            );
        };

        const renderRow = (row: number) => {
            const filterRowData = data.slice(
                currentRenderCount,
                currentRenderCount + columns
            );

            currentRenderCount = currentRenderCount + columns;
            return (
                <VirtualItem
                    height={rowHeight}
                    key={row}
                    listItemProps={listItemProps}
                    offset={
                        (containerRef?.current?.clientHeight || 0) +
                        rowHeight * preRenderRowCount
                    }
                    spacing={spacing}
                    target={containerRef?.current as HTMLDivElement}
                    top={row * rowHeight}
                    variant={variant}
                >
                    {filterRowData.map(renderItemsForRow)}
                </VirtualItem>
            );
        };

        return (
            <Grid
                className={classes.root}
                container
                ref={containerRef}
                spacing={spacing}
                style={{
                    height: containerHeight,
                }}
            >
                {data?.length ?
                    variant == 'List' ? (
                        <List className={classes.scrollableListContainerStyle}>
                            {rows?.map(renderRow)}
                        </List>
                    ) : (
                        <Grid container className={classes.scrollableContainerStyle} item>
                            {rows?.map(renderRow)}
                        </Grid>
                    ) 
                : (
                    <Grid container justify="center">
                        <Grid item xs={false}>
                            <Typography variant="body1">{localizationMessages?.nothingToDisplay}</Typography>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        );
    }
);

VirtualizedMUIGrid.displayName = 'VirtualizedMUIGrid';

export default withStyles(VirtualizedMUIGridStyles, {
    name: 'OdsVirtualizedMUIGrid',
})(VirtualizedMUIGrid);
