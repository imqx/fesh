import { Card, CardContent, makeStyles } from '@material-ui/core';
import React, { ReactNode } from 'react';

export interface IBaseBoardProps {
  children?: ReactNode;
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function BaseBoard(props: IBaseBoardProps) {
  const classes = useStyles();
  const { children } = props;

  return (
    <Card square variant="outlined" className={classes.root}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
