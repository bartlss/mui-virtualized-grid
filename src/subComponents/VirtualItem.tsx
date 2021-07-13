import React, { useCallback, useEffect, useState } from 'react';
import { Grid, GridSpacing, ListItem, ListItemTypeMap, makeStyles, useScrollTrigger } from '@material-ui/core';

export interface VirtualItemProps {
  height: number;
  listItemProps?: ListItemTypeMap<
    {
      button?: false | undefined;
    },
    'li'
  >;
  offset: number;
  spacing?: GridSpacing;
  target: HTMLDivElement;
  top: number;
  /** Defines either a Grid with items or List with List Items */
  variant?: 'Grid' | 'List';
}

const useStyles = makeStyles({
  rowGrid: {
    position: 'absolute',
    top: (props: VirtualItemProps) => props.top,
    left: 0,
    height: (props: VirtualItemProps) => props.height,
  },
  rowList: {
    position: 'absolute',
    top: (props: VirtualItemProps) => props.top,
    left: 0,
    height: (props: VirtualItemProps) => props.height,
    width: '100%',
  },
});

export const VirtualItem: React.FC<VirtualItemProps> = ({
  children,
  height,
  listItemProps = {},
  offset,
  spacing,
  target,
  top,
  variant = 'Grid',
}) => {
  const [canShow, setCanShow] = useState<boolean>(false);
  const classes = useStyles({
    top,
    height,
  } as VirtualItemProps);
  const showTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: top - offset,
    target: target || {},
  });
  const hideBottomTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: top + offset,
    target: target || {},
  });

  const callback = useCallback(() => {
    setCanShow(showTrigger && !hideBottomTrigger);
  }, [showTrigger, hideBottomTrigger]);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, 1);

    return () => {
      clearTimeout(handler);
    };
  }, [callback]);

  if (canShow) {
    if (variant === 'List') {
      return (
        <ListItem {...listItemProps} className={classes.rowList} data-testid="virtualized-listitem-component">
          {children}
        </ListItem>
      );
    }

    return (
      <Grid container className={classes.rowGrid} item spacing={spacing} data-testid="virtualized-grid-item-component">
        {children}
      </Grid>
    );
  }
  return null;
};
