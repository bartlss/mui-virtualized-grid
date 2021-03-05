import { GridSpacing, ListItemTypeMap } from '@material-ui/core';
import React from 'react';
export interface VirtualizedMUIGridProps {
    /** Class keys for updating the styles on classes. If you choose to override the theme object to include the class keys form this component, You can import `VirtualizedMUIGridClassKey`. */
    classes?: Partial<Record<VirtualizedMUIGridClassKey, string>>;
    /** Controls total number of columns. Passing anything greater than 1 will assume Grid and not ListItem (i.e overrides the variant prop) */
    columns?: 1 | 2 | 3 | 4 | 6 | 12;
    /** The height of the containing Grid container */
    containerHeight?: number | string;
    /** an Array of data */
    data: any[];
    /** Props for Material UI List Item */
    listItemProps?: ListItemTypeMap<{
        button?: false | undefined;
    }, 'li'>;
    /** Message translations */
    localizationMessages?: {
        nothingToDisplay: string;
    };
    /** Defines the number of rows to load outside of the visible area */
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
export declare type VirtualizedMUIGridClassKey = 'root' | 'scrollableContainerStyle' | 'scrollableListContainerStyle';
export declare const VirtualizedMUIGrid: React.ForwardRefExoticComponent<VirtualizedMUIGridProps & {
    component?: React.ElementType<any> | undefined;
} & React.RefAttributes<any>>;
declare const _default: React.ComponentType<Pick<VirtualizedMUIGridProps & {
    component?: React.ElementType<any> | undefined;
} & React.RefAttributes<any>, "data" | "columns" | "component" | "variant" | "spacing" | "listItemProps" | "localizationMessages" | "containerHeight" | "preRenderRowCount" | "renderItem" | "rowHeight" | keyof React.RefAttributes<any>> & import("@material-ui/core").StyledComponentProps<VirtualizedMUIGridClassKey> & VirtualizedMUIGridProps>;
export default _default;
