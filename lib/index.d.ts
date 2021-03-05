/// <reference types="react" />
import { GridSpacing, ListItemTypeMap } from '@material-ui/core';
export interface VirtualizedMUIGridProps {
    classes?: Partial<Record<VirtualizedMUIGridClassKey, string>>;
    /** Passing anything greater than 1 will assume Grid and not ListItem */
    columns?: 1 | 2 | 3 | 4 | 6 | 12;
    containerHeight?: number | string;
    data: any[];
    listItemProps?: ListItemTypeMap<{
        button?: false | undefined;
    }, 'li'>;
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
export declare type VirtualizedMUIGridClassKey = 'root' | 'scrollableContainerStyle' | 'scrollableListContainerStyle';
export declare const VirtualizedMUIGrid: import("react").ForwardRefExoticComponent<VirtualizedMUIGridProps & {
    component?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<any>>;
declare const _default: import("react").ComponentType<Pick<VirtualizedMUIGridProps & {
    component?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<any>, "data" | "columns" | "component" | "variant" | "spacing" | "listItemProps" | "localizationMessages" | "containerHeight" | "preRenderRowCount" | "renderItem" | "rowHeight" | keyof import("react").RefAttributes<any>> & import("@material-ui/core").StyledComponentProps<VirtualizedMUIGridClassKey> & VirtualizedMUIGridProps>;
export default _default;
