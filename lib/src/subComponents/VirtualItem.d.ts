import React from 'react';
import { GridSpacing, ListItemTypeMap } from '@material-ui/core';
export interface VirtualItemProps {
    height: number;
    listItemProps?: ListItemTypeMap<{
        button?: false | undefined;
    }, 'li'>;
    offset: number;
    spacing?: GridSpacing;
    target: HTMLDivElement;
    top: number;
    /** Defines either a Grid with items or List with List Items */
    variant?: 'Grid' | 'List';
}
export declare const VirtualItem: React.FC<VirtualItemProps>;
